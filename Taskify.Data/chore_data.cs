using System;
using Taskify.Domain;

namespace Taskify.Data
{
   public class chore_data
    {
       public int id { get; set; }
       public string name { get; set; }
       public string requirements { get; set; }
       public DateTime deadline { get; set; }
       public string status { get; set; }

       public static chore_data FromDomain(Chore chore)
       {
           return new chore_data
           {
               name = chore.Name,
               requirements = chore.Requirement,
               deadline = chore.Deadline,
               status = chore.Status.ToString()
           };
       }
    }
}
