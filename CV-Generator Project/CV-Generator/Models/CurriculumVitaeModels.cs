namespace CV_Generator.Models
{
    using System.Collections.Generic;

    public class CurriculumVitaeModels
    {
        public CurriculumVitaeModels()
        {
            this.PersonalInformation = new PersonalInformationModels();
            this.WorkExperience = new List<WorkExperienceModels>();
            this.Skills = new SkillModels();
            this.Education = new List<EducationModels>();
            this.Certificates = new List<CertificateModels>();
            this.Languages = new List<LanguagesModels>();
            this.DrivingLicences = new List<DrivingLicenceModels>();
        }

        public string Language { get; set; }
        public byte[] PhotoBytes { get; set; }
        public string PhotoLink{ get; set; }

        public PersonalInformationModels PersonalInformation { get; set; }
        public List<WorkExperienceModels> WorkExperience { get; set; }
        public SkillModels Skills { get; set; }
        public List<EducationModels> Education { get; set; } 
        public List<CertificateModels> Certificates { get; set; }
        public List<LanguagesModels> Languages { get; set; } 
        public List<DrivingLicenceModels> DrivingLicences { get; set; } 
        public string AdditionalInformation { get; set; }
    }
}