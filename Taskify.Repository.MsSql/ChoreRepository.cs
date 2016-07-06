using System;
using System.Collections.Generic;
using System.Linq;
using AgriSol.Repository.SqlServer;
using Dapper;
using Taskify.Data;
using Taskify.Domain;

namespace Taskify.Repository.MsSql
{
    public class ChoreRepository: RepositoryBase
    {
        public Chore ToDomain(chore_data choreData)
        {
            return new Chore
            {
                Id = choreData.id,
                Name = choreData.name,
                Deadline = choreData.deadline,
                Requirement = choreData.requirements,
                Status = (ChoreStatus) Enum.Parse(typeof (ChoreStatus), choreData.status)
            };
        }
        public void Create(Chore chore)
        {
            var sql = @"INSERT INTO chore
                        (name, requirements, deadline, status)
                        VALUES
                        (@name, @requirements, @deadline, @status)";

            var data = chore_data.FromDomain(chore);
            _db.Execute(sql, data);
        }

        public List<Chore> GetMany()
        {
            var sql = @"SELECT * FROM chore";

            var choresData = _db.Query<chore_data>(sql).ToList();

            return choresData.Select(ToDomain).ToList();
        }

        public Chore GetById(int id)
        {
            var sql = "SELECT * FROM chore WHERE id = @id";

            var choreData = _db.Query<chore_data>(sql, new {id}).First();

            return ToDomain(choreData);
        }
    }
}
