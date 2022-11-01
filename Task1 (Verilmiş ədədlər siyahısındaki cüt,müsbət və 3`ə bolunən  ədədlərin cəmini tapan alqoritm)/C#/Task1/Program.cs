namespace Task1
{
    internal class Program
    {
        static void Main(string[] args)
        {
            int[] ededler = { -21, 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20 , 22, 24, 26, 28, 30};
            int count=0;
            for (int i = 0; i < ededler.Length; i++) 
            {
                if (ededler[i] > 0 && ededler[i]%6==0)
                {
                    Console.WriteLine(ededler[i]);
                    count += ededler[i];
                }

            }
            Console.WriteLine("Cem:" +count);

        }
    }
}