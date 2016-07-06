using System.Linq;
using System.Web.Mvc;
using Taskify.Repository.MsSql;
using Taskify.Web.Models;

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
            using (var repo = new ChoreRepository())
            {
                repo.Create(model.ToDomain());
                return new JsonResult
                {
                    Data = new { IsOk = true }
                };
            }
        }

        public ActionResult Index()
        {
            using (var repo = new ChoreRepository())
            {
                var chores = repo.GetMany();
                var model = chores.Select(ChoreListModel.FromDomain);
                return View(model);
            }
        }

        public ActionResult Edit(int id)
        {
            using (var repo = new ChoreRepository())
            {
                var chore = repo.GetById(id);
                var model = ChoreModel.FromDomain(chore);
                return View(model);
            }
        }
    }
}