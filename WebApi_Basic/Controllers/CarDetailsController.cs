using System.Collections.Generic;
using System.Linq;
using System.Web.Http;
using WebApi_Basic.Models;

namespace WebApi_Basic.Controllers
{
    public class CarDetailsController : ApiController
    {
        ApplicationDbContext db = new ApplicationDbContext();

        // GET api/<controller>
        public IEnumerable<CarsStock> Get()
        {
            return db.Cars.ToList();  
        }

        // GET api/<controller>/5
        public CarsStock Get(int id)
        {
            return db.Cars.Find(id);
        }

        // POST api/<controller>
        public void Post([FromBody]CarsStock value)
        {
            db.Cars.Add(value);
            db.SaveChanges();
        }

        // PUT api/<controller>/5
        public void Put(int id, [FromBody]CarsStock value)
        {

        }

        // DELETE api/<controller>/5
        public void Delete(int id)
        {
        }
    }
}