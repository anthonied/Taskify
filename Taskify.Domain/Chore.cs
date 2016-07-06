using System;

namespace Taskify.Domain
{
    public class Chore
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Requirement { get; set; }
        public DateTime Deadline { get; set; }
        public ChoreStatus Status { get; set; }
    }
}
