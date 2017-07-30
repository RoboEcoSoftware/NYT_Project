using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using NYTDataAccess;



namespace NYTServices.Controllers
{
    public class NYTController : ApiController
    {
        public IEnumerable<Employee> Get()
        {
            using (NYTDBEntities entities = new NYTDBEntities())
            {
                return entities.Employees.ToList();
            }
        }

        public Employee Get(int id)
        {
            using (NYTDBEntities entities = new NYTDBEntities())
            {
                return entities.Employees.FirstOrDefault(e => e.ID == id);
            }
        }
    }
}
