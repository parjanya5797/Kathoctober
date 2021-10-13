using System;

namespace min_max
{
    class Program
    {
        static void Main(string[] args)
        {
            int min = 0;
            int mini_num = 0;
            Console.WriteLine("==============================Min Max Program==============================");
            Console.Write("Add First Number = ");
            int a = int.Parse(Console.ReadLine());
            Console.Write("Add Second Number = ");
            int b = int.Parse(Console.ReadLine());

            /* ***************Function Way*************** */
            int max = minMax(a, b, ref min);
            Console.WriteLine("{0} is greater than {1}", max, min);
            /* *************************** */

            /* ****************Class Way**************** */
            MinMax minmax = new MinMax(a, b, ref mini_num);
            int maximum = minmax.maximum();
            Console.WriteLine("{0} is greater than {1}", maximum, mini_num);
            /* ********************************* */

            Console.WriteLine("===========================================================================");
        }

        /* By Function */
        public static int minMax(int a, int b, ref int min)
        {
            if (a > b)
            {
                min = b;
                return a;
            }
            else
            {
                min = a;
                return b;
            }
        }
    }

    class MinMax
    {
        int first, second, minimum;
        public MinMax(int a, int b, ref int mini_num)
        {
            first = a;
            second = b;
            minimum = mini_num;
        }

        public int maximum()
        {
            if (first > second)
            {
                minimum = second;
                return first;
            }
            else
            {
                minimum = first;
                return second;
            }
        }
    }
}
