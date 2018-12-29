// Multiply every other digit by 2, starting with the number’s second-to-last digit, and then add those products' digits together.
// Add the sum to the sum of the digits that weren’t multiplied by 2.
// If the total’s last digit is 0 (or, put more formally, if the total modulo 10 is congruent to 0), the number is valid!

// rd strategy
// grab the last element and add it to int adder

// figure out how to access different digits of a number
// go through the number in one go if possible.
// 378282246310005
// 371449635398431  378734493671000
// visa 4111111111111111
//      4012888888881881
//      4222222222222
// mc 5555555555554444
#include <cs50.h>
#include <stdio.h>
#include <math.h>

int return_digit(long cc_num, int digit);

int main(void)
{
    long cc_num = get_long_long("Enter your credit card number: ");
    int l = log10(cc_num) + 1; // get length
    if (l < 13 || l > 16) //quick short-circuit for invalid lengths
    {
        printf("INVALID\n");
        return 0;
    }
    int digit_array[16]; //make array
    long working_cc_copy = cc_num; //copy so as to not destroy cc
    for (int i = 0; i < l; i++)
    {
        digit_array[i] = working_cc_copy - ((working_cc_copy / 10) * 10); //populate array
        working_cc_copy /= 10; //increment cc_copy
    }
    int clean_array[16]; //make clean copy of array before modification for final check on initial digits
    for (int i = 0; i < l; i++)
    {
        clean_array[i] = digit_array[i]; // copy array, entry by entry.
    }

    for (int i = 0; i < l; i++)
    {
        if (i % 2 > 0) // if odd, do math
        {
            // printf("odd number %d\n", i);
            digit_array[i] = digit_array[i] * 2;
            if (digit_array[i] > 9)
            {
                digit_array[i] = digit_array[i] - 9;
            }
        }
    }
    int total = 0;
    for (int i = 0; i < l; i++)
    {
        total += digit_array[i];
    }

    // analysis
    if (total % 10 == 0)
    {
        // printf("checksum is valid\n");
        switch (l)
        {
            case (15):
                // printf("amex length matches(15)\n");
                if ((clean_array[14] == 3) && ((clean_array[13] == 4) || (clean_array[13] == 7)))
                {
                    printf("AMEX\n");
                    return 0;
                }
                break;
            case (16):
                // printf("length matches (16)\n");
                if ((clean_array[15] == 5) && ((clean_array[14] == 1) || (clean_array[14] == 2) || (clean_array[14] == 3) || (clean_array[14] == 4)
                                               || (clean_array[14] == 5)))
                {
                    printf("MASTERCARD\n");
                    return 0;
                }
                if (clean_array[15] == 4)
                {
                    printf("VISA\n");
                    return 0;
                }
                break;
            case (13):
                // printf("length matches (13)\n");
                if (clean_array[12] == 4)
                {
                    printf("VISA\n");
                    return 0;
                }
                break;
            default:
                printf("INVALID\n");
        }
        printf("INVALID\n");
    }
    else
    {
        printf("INVALID\n");
    }
    return 0;
}
