#include <stdio.h>
#include <cs50.h>
#include <string.h>
#include <stdlib.h>
#include <ctype.h>

int main(int argc, string argv[])
{
    if (argc != 2) // check for too many or few args
    {
        printf("usage: ./vigenere k\n");
        return 1;
    }

    string key = argv[1];


    for (int j = 0 ; j < strlen(key); j++)
    {
        // check for non alpha chars in key
        if (!isalpha(key[j]))
        {
            printf("non alpha key detected\n");
            exit(1);
        }

        // lowercase-ify the key
        if ((int) key[j] > 64 && (int) key[j] < 91)

        {
            key[j] = (char) key[j] + 32;
            // printf("capital letter detected\n");
        }

    }

    string plaintext = get_string("plaintext: ");
    string cyphertext = "";
    int minchar;
    int maxchar;
    int offset;
    int key_counter = 0;


    for (int i = 0 ; i < strlen(plaintext); i++)
    {
        int key_index = (int) key_counter % strlen(key); //this works to loop through the key if the cleartext is longer than it.

        if ((int) plaintext[i] > 64 && (int) plaintext[i] < 91)
        {
            offset = key[key_index] - 97;
            // this is uppercase. this should probably be made into a function
            maxchar = 90;
            minchar = 65;
            if ((plaintext[i] + offset) > maxchar)
            {
                plaintext[i] = plaintext[i] + offset - 26;
            }
            else
            {
                plaintext[i] = (plaintext[i] + offset);
            }
            key_counter++; //increment the key if it is a valid alpha
        }
        if ((int) plaintext[i] > 96 && (int) plaintext[i] < 123)
        {
            offset = key[key_index] - 97;
            // this is lowercase. this should probably be made into a function
            maxchar = 122;
            minchar = 97;
            if ((plaintext[i] + offset) > maxchar)
            {
                // printf("lowercase offset = %i. deleting 26.\n", offset);
                plaintext[i] = plaintext[i] + offset - 26;
            }
            else
            {
                // printf("lowercase offset = %i.\n", offset);
                plaintext[i] = (plaintext[i] + offset);
            }
            key_counter++; //increment the key if it is a valid alpha
        }
    }
    printf("ciphertext: %s\n", plaintext);
}
// BaRFoo
