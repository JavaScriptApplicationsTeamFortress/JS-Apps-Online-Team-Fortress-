namespace CV_Generator.Models
{
    using System.Collections.Generic;

    public class LanguagesModels
    {
        public LanguagesModels()
        {
        }

        public string Name { get; set; }
        public string SkillGroup { get; set; }
        public int Reading { get; set; }
        public int Speaking { get; set; }
        public int Listening { get; set; }
    }
}