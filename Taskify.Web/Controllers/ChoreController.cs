using System;
using System.Web.Mvc;
using Taskify.Domain;
using Taskify.Repository.MsSql;

namespace Taskify.Web.Controllers
{
    public class ChoreController : Controller
    {
        public ActionResult Add()
        {
            return View();
        }

        public JsonResult Create(ChoreModel model)
        {
            var repo = new ChoreRepository();
            repo.Create(model.ToDomain());
            return new JsonResult
            {
                Data = new {IsOk = true}
            };
        }
    }

    public class ChoreModel
    {
        public string Name { get; set; }
        public string Requirement { get; set; }
        public DateTime Deadline { get; set; }
        public string Status { get; set; }

        public Chore ToDomain()
        {
            return new Chore
            {
                Name = Name,
                Requirement = Requirement,
                Deadline = Deadline,
                Status = (ChoreStatus)Enum.Parse(typeof(ChoreStatus), Status)
            };
        }
    }
}