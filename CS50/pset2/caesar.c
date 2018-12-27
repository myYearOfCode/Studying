#include <stdio.h>
#include <cs50.h>
#include <string.h>
#include <stdlib.h>

int main(int argc, string argv[])
{
    if (argc != 2) // check for too many or few args
    {
        printf("usage: ./caesar k\n");
        return 1;
    }
    int offset = atoi(argv[1]);
    string plaintext = get_string("plaintext: ");
    string cyphertext = "";
    // int minchar;
    int maxchar;
    offset = offset % 26;
    for (int i = 0 ; i < strlen(plaintext); i++)
    {
        if ((int) plaintext[i] > 64 && (int) plaintext[i] < 91)
        {
            // this is lowercase. this should probably be made into a function
            maxchar = 90;

            if ((plaintext[i] + offset) > maxchar)
            {
                plaintext[i] = plaintext[i] + (offset - 26);
            }
            else
            {
                plaintext[i] = (plaintext[i] + offset);
            }
        }
        if ((int) plaintext[i] > 96 && (int) plaintext[i] < 123)
        {
            // this is uppercase. this should probably be made into a function
            maxchar = 122;

            if ((plaintext[i] + offset) > maxchar)
            {
                plaintext[i] = plaintext[i] + (offset - 26);
            }
            else
            {
                plaintext[i] = (plaintext[i] + offset);
            }
        }
    }
    printf("ciphertext: %s\n", plaintext);
}
