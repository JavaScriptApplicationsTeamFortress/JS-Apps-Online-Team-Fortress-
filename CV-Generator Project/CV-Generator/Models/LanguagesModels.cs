namespace CV_Generator.Models
{
    using System.Collections.Generic;

    public class LanguagesModels
    {
        public LanguagesModels()
        {
            this.ForeignLanguages = new List<ForeignLanguageModels>();
        }

       public string MotherTongue { get; set; }
        public List<ForeignLanguageModels> ForeignLanguages { get; set; }
    }
}