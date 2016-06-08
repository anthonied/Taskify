using System;
using Taskify.Domain;
using Taskify.Repository.MsSql;

namespace Temp
{
    class Program
    {
        static void Main(string[] args)
        {
            var chore = new Chore
            {
                Name = "Write a program",
                Requirement = "Do a vertical of adding a chore",
                Deadline = DateTime.Now,
                Status = ChoreStatus.Inprogress
            };

            var repo = new ChoreRepository();

            repo.Create(chore);
        }
    }
}
