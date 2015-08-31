namespace CV_Generator.Models
{
    using System.Collections.Generic;

    public class EmployerModels
    {
        public EmployerModels()
        {
            this.Recommendations =new List<string>();
        }

        public string Name { get; set; }
        public string Country { get; set; }
        public string City { get; set; }
        public string Website { get; set; }
        public List<string> Recommendations { get; set; }
    }
}
