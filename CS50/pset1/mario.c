#include <stdio.h>
#include <cs50.h>

int make_string(int num, int max);

int main(void)
{
    // int i = -1;
    // do
    // {
    int i = get_int("how high would you like your pyramid? ");

    while (i < 0 || i > 23)
    {
        i = get_int("how about a number between 0 and 23? ");
    }

    for (int j = i - 1; j >= 0; j--)
    {
        make_string(j, i);
    }
};

int make_string(int num, int max)
{
    //this prints the left side
    for (int i = 0; i < max; i++)
    {
        if (i < num)
        {
            printf(" ");
        }
        else if (i >= num)
        {
            printf("#");
        }
    }
    //this prints the center gap
    printf("  ");

    //this prints the right side pyramid
    for (int j = 0; j < max; j++)
    {
        if (max - j > num)
        {
            printf("#");
        }
    }
    // printf(" %i %i \n ", num, max);
    printf("\n");
    return 0;
};
