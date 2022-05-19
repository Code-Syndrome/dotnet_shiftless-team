using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;
using ASP.NET_Web_Api.Data.Models;

namespace ASP.NET_Web_Api.Controllers.Models {
    public class UpdateNewsViewModel {
        [Required]
        public News Target { get; set; }
        [Required]
        public string NewsId { get; set; }
    }
}
