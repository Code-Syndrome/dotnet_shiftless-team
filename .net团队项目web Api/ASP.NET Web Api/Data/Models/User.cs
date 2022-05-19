using Newtonsoft.Json;

namespace ASP.NET_Web_Api.Data.Models
{
    
    public class User
    {
        [JsonProperty("username")]
        public string username { get; set; }

        [JsonProperty("password")]
        public string password { get; set; }

        [JsonProperty("permission")]
        public int permission { get; set; }
    }
}
