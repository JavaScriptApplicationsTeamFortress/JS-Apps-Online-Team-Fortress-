using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Helpers;
using System.Web.Mvc;
using System.Xml.Xsl;
using CV_Generator.App_Start;
using CV_Generator.Models;
using DatabaseLayer;
using Microsoft.AspNet.Identity;

namespace CV_Generator.Controllers
{
    [Authorize]
    public class HomeController : Controller
    {
        public readonly Table<string, CurriculumVitaeModels> table;

        public HomeController()
        {
            this.table = DatabaseSingletone.Storage.OpenTable<string, CurriculumVitaeModels>("CVs");
        }

        public ActionResult Index()
        {
            ViewBag.CurrentPage = "selected";//This is very bad practice;

            var userId = this.User.Identity.GetUserId();
            CurriculumVitaeModels model;

            if (!this.table.Contains(userId))
            {
                model = new CurriculumVitaeModels();

                this.table.Insert(userId, model);    
            }
            else
            {
                model = this.table[userId];
            }

            return View(model);
        }
       
        public ActionResult CreateCV()
        {
            ViewBag.Message = "Template for create CV.";//This is very bad practice;
            ViewBag.CurrentPage = "selected";//This is very bad practice;

            return View("Add");
        }

        [HttpGet]
        [AllowAnonymous]
        public ActionResult PreviewDocument(string id = null)
        {
            ViewBag.Message = "View document";//This is very bad practice;

            if (!IsLogged() && id == null)
            {
                return HttpNotFound();
            }

            string userId = id != null ? id : this.User.Identity.GetUserId();
            CurriculumVitaeModels model = this.table[userId];

            var isAjax = HttpContext.Request.IsAjaxRequest();

            if (isAjax)
            {
                return PartialView("PreviewDocument", model);
            }

            return View("PreviewDocument", model);
        }

        [HttpPost]
        [AjaxOnly]
        public ActionResult CreateCV(CurriculumVitaeModels cv)
        {
            var userId = this.User.Identity.GetUserId();

            if (cv.PhotoBytes != null)
            {
                if (cv.PhotoBytes != null || cv.PhotoBytes.Length > 0)
                {
                    cv.PhotoLink = GetLink(userId);
                    SaveImage(cv.PhotoLink, cv.PhotoBytes);
                }
            }
            
            this.table[userId] = cv;

            return Json(userId, JsonRequestBehavior.AllowGet);
            //return RedirectToAction("PreviewDocument");
        }

        private bool IsLogged()
        {
            return User.Identity != null && User.Identity.IsAuthenticated;
        }

        private string GetLink(string userId)
        {
            return Server.MapPath("~/images/" + userId + ".png");
        }

        private void SaveImage(string path, byte[] photo)
        {
            WebImage image = new WebImage(photo);

            image.Save(path);
        }
    }

    public class AjaxOnlyAttribute : ActionMethodSelectorAttribute
    {
        public override bool IsValidForRequest(ControllerContext controllerContext, System.Reflection.MethodInfo methodInfo)
        {
            return controllerContext.RequestContext.HttpContext.Request.IsAjaxRequest();
        }
    }
}