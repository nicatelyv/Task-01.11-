namespace Task2
{
    internal class Program
    {
        static void Main(string[] args)
        {
            int [] reqem = { 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90 };
            int x=reqem[0];
            
            for (int i = 0; i < reqem.Length; i++)
            {
                if (reqem[i] > x) ;
                x= reqem[i];
                

                
            }
            Console.WriteLine("En boyuk reqem:" + x);
        }
    }
}