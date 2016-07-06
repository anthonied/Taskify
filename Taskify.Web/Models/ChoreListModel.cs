using Taskify.Domain;

namespace Taskify.Web.Models
{
    public class ChoreListModel
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string DeadLine { get; set; }
        public string Status { get; set; }

        public static ChoreListModel FromDomain(Chore chore)
        {
            return new ChoreListModel
            {
                Id = chore.Id,
                Name = chore.Name,
                DeadLine = chore.Deadline.ToString("D"),
                Status = chore.Status.ToString()
            };
        }

    }
}