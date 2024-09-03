import random
import os
from dict import dict
from functions import check_winner, print_score

stuff = []
for item in dict:
    stuff.append(item)

print("Welcome in higher or lower game!")

playAgain = True
while playAgain:
    score = 0
    print_score(score)

    nextRound = True
    while nextRound:
        first,second = random.sample(stuff,2)

        print(f"Compare A: {first}")
        print(f"Against B: {second}")

        choice = input("Who has more Google searches? Type 'A' or 'B': ")

        while choice not in ['A', 'B']:
            print("Invalid input.")
            choice = input("Who has more Google searches? Type 'A' or 'B': ").upper()

        nextRound,score =check_winner(choice,first,second,score)

    choice2 = input("Do you wanna play Again? Type 'yes' or 'no': ").lower()
    while choice2 not in ["yes", "no"]:
        print("invalid input"),
        choice2 = input("Do you wanna play Again? Type 'yes' or 'no': ").lower()

    if choice2 == "yes":
        os.system('cls')
    else:
        playAgain = False

print("Okey. Goodbye!")
