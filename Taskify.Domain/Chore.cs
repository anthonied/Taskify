using System;

namespace Taskify.Domain
{
 public class Chore
    {
     public string Name { get; set; }
     public string Requirement { get; set; }
     public DateTime Deadline { get; set; }
     public ChoreStatus Status { get; set; }
    }
}
