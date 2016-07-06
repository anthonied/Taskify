using System;
using Taskify.Domain;

namespace Taskify.Web.Models
{
    public class ChoreModel
    {
        public string Name { get; set; }
        public string Requirement { get; set; }
        public string Deadline { get; set; }
        public string Status { get; set; }

        public Chore ToDomain()
        {
            return new Chore
            {
                Name = Name,
                Requirement = Requirement,
                Deadline = DateTime.Parse(Deadline),
                Status = (ChoreStatus)Enum.Parse(typeof(ChoreStatus), Status)
            };
        }

        public static ChoreModel FromDomain(Chore chore)
        {
            return new ChoreModel
            {
                Name = chore.Name,
                Requirement = chore.Requirement,
                Status = chore.Status.ToString(),
                Deadline = chore.Deadline.ToString("D")
            };
        }
    }
}