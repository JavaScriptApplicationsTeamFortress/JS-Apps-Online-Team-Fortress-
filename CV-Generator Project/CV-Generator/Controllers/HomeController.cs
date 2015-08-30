using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Xml.Xsl;

namespace CV_Generator.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            if (!IsLogged())
            {
                return RedirectToAction("Login", "Account", "Test");
            }

            return View();
        }

        public ActionResult CreateCV()
        {
            if (!IsLogged())
            {
                return RedirectToAction("Login", "Account", "Test");
            }

            ViewBag.Message = "Template for create CV.";

            return View("Add");
        }

        [HttpPost]
        [AjaxOnly]
        public ActionResult CreateCV(object cv)
        {
            throw new NotImplementedException();
        }

        [HttpPost]
        public ActionResult View(int? id)
        {
            throw new NotImplementedException();
        }

        private bool IsLogged()
        {
            return User.Identity != null && User.Identity.IsAuthenticated;
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