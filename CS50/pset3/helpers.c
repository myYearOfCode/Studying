// Helper functions for music

#include <cs50.h>
#include <math.h>
#include <stdio.h>
#include <string.h>
#include "helpers.h"


// it seems like my offset is wrong for some notes below.
// double check that in the am.



// int main(void)
// // this is for testing the bits below. it should be deleted / commented once they are working.
// {
//     // printf("\n %d \n",is_rest("hello"));
//     printf("%d \n", duration("2/2"));
//     printf("%d \n",frequency("A#4"));
//     return 0;
// }


// Converts a fraction formatted as X/Y to eighths
int duration(string fraction)
{
    int top = fraction[0] - '0';
    int bottom = fraction[2] - '0';
    return (top * 8 / bottom);
}

// Calculates frequency (in Hz) of a note
int frequency(string note)
{
    // TODO
    // split the note into octave and note
    // use octave as multiplier
    // use note and multiplier to set hz using formula
    string noteName = "";
    int octave;
    int offset = 0;
    if (strlen(note) == 3)
    {
        char str [3];
        sprintf(str, "%c%c", note[0], note[1]);
        noteName = str;
        octave = note[2] - '0';
        // printf("strlen is 3. str is %s. octave is %d\n", str, octave);
    }

    else
    {
        char str [2];
        sprintf(str, "%c", note[0]);
        noteName = str;
        octave = note[1] - '0';
        // printf("str is %s. octave is %d\n", str, octave);
    }

    // adjust for note
    if (strncmp(noteName, "C#", 2) == 0 || strncmp(noteName, "Db", 2) == 0)
    {
        offset -= 8;
    }
    else if (strncmp(noteName, "D#", 2) == 0 || strncmp(noteName, "Eb", 2) == 0)
    {
        offset -= 6;
    }
    else if (strncmp(noteName, "F#", 2) == 0 || strncmp(noteName, "Gb", 2) == 0)
    {
        offset -= 3;
    }
    else if (strncmp(noteName, "G#", 2) == 0 || strncmp(noteName, "Ab", 2) == 0)
    {
        offset -= 1;
    }
    else if (strncmp(noteName, "A#", 2) == 0 || strncmp(noteName, "Bb", 2) == 0)
    {
        offset += 1;
    }
    else if (strncmp(noteName, "C", 1) == 0)
    {
        offset -= 9;
    }
    else if (strncmp(noteName, "D", 1) == 0)
    {
        offset -= 7;
    }
    else if (strncmp(noteName, "E", 1) == 0)
    {
        offset -= 5;
    }
    else if (strncmp(noteName, "F", 1) == 0)
    {
        offset -= 4;
    }
    else if (strncmp(noteName, "G", 1) == 0)
    {
        offset -= 2;
    }
    else if (strncmp(noteName, "A", 1) == 0)
    {
        offset -= 0;
    }
    else if (strncmp(noteName, "B", 1) == 0)
    {
        offset += 2;
    }
    //adjust for octave
    offset += ((octave - 4) * 12);
    // printf("%d steps from A4.\n", offset);
    double twelvethRoot = 1.059463094359; //pow(2, (1/12));
    // double hertz = (round(pow(2,(offset/12))*440));
    float exponent = offset / 12;
    // double hertz = (round(pow(2,exponent)*440));
    double hertz = round(pow(twelvethRoot, offset) * 440);
    // printf("%f\n", hertz);
    // int output = hertz;
    // printf("%d/n", output);
    return hertz;
}

// Determines whether a string represents a rest
bool is_rest(string s)
{
    if (strlen(s) == 0)
    {
        return true;
    }
    return false;
}
