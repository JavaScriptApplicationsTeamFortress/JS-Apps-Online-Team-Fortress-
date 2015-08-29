using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

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
            ViewBag.Message = "Template for create CV.";

            return View();
        }

        public ActionResult About()
        {
            ViewBag.Message = "Your application description page.";

            return View();
        }

        public ActionResult Add()
        {
            ViewBag.Message = "Your CV";

            return View();
        }

        public ActionResult CoverLetter()
        {
            ViewBag.Message = "Your Cover Letter";

            return View();
        }

        public ActionResult Contact()
        {
            ViewBag.Message = "Your contact page.";

            return View();
        }

        public ActionResult CreateCurriculumVitae()
        {
            return View();
        }

        private bool IsLogged()
        {
            return User.Identity != null && User.Identity.IsAuthenticated;
        }
    }
}