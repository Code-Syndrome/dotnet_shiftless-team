using ASP.NET_Web_Api.Data.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ASP.NET_Web_Api.Controllers.Models {
    public class UpdateResultViewModel {
        public News News { get; set; }
        public int StatusCode { get; set; }
        public string Message { get; set; }
    }
}
