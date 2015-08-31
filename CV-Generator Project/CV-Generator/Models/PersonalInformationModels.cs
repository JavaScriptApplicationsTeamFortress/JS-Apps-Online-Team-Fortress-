using System;

namespace CV_Generator.Models
{
    public class PersonalInformationModels
    {
        public PersonalInformationModels()
        {
            SocialMedia = new SocialMediaModels();
        }

        public string FirstName { get; set; }
        public string MiddleName { get; set; }
        public string LastName { get; set; }
        public string Email { get; set; }
        public string DateOfBirth { get; set; }
        public int Age { get; set; }
        public Sex Gender { get; set; }
        public string PhoneNumber { get; set; }
        public string Country { get; set; }
        public string Nationality { get; set; }
        public SocialMediaModels SocialMedia { get; set; }
    }
}
