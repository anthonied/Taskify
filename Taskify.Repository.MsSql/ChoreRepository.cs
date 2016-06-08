using AgriSol.Repository.SqlServer;
using Dapper;
using Taskify.Data;
using Taskify.Domain;

namespace Taskify.Repository.MsSql
{
    public class ChoreRepository: RepositoryBase
    {
        public void Create(Chore chore)
        {
            var sql = @"INSERT INTO chore
                        (name, requirements, deadline, status)
                        VALUES
                        (@name, @requirements, @deadline, @status)";

            var data = chore_data.FromDomain(chore);
            _db.Execute(sql, data);
        }
    }
}
