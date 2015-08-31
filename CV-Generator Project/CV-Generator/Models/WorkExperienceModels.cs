namespace CV_Generator.Models
{
    public class WorkExperienceModels
    {
        public WorkExperienceModels()
        {
            this.Employer = new EmployerModels();
        }

        public EmployerModels Employer { get; set; }
        public string Period { get; set; }
        public string From { get; set; }
        public string To { get; set; }
        public string Occupation { get; set; }
        public string Responsibilities { get; set; }
    }
}
