using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CV_Generator.Models
{
    public class CalculateProgress
    {
        public static int PersonalInfo(int countOfProvidedInput)
        {
            int point = 25; // max input field for Pesonal Info is (4) => 4 * 25 = 100
            return point * countOfProvidedInput;
        }

        public static int Еducation(int countOfProvidedInput)
        {
            int point = 20; // max input field for Pesonal Info is (5) => 5 * 20 = 100
            return point * countOfProvidedInput;
        }

        public static int WorkЕxperience(int countOfProvidedInput)
        {
            int point = 20; // max input field for Pesonal Info is (5) => 5 * 20 = 100
            return point * countOfProvidedInput;
        }

        public static int Language(int countOfProvidedInput)
        {
            int point = 100; // max input field for Pesonal Info is (1) => 1 * 100 = 100
            return point * countOfProvidedInput;
        }

        public static int Skills(int countOfProvidedInput)
        {
            int point = 33; // max input field for Pesonal Info is (3) => (3 * 33) + 1 = 100
            return point * countOfProvidedInput + 1;
        }
    }
}