namespace CV_Generator.Models
{
    using System.Collections.Generic;

    public class DrivingLicenceModels
    {
        public DrivingLicenceModels()
        {
            this.Categories = new List<DrivingLicenceCategoryModels>();
        }

        public List<DrivingLicenceCategoryModels> Categories { get; set; } 
    }
}
