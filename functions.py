from dict import dict
def check_winner(choice,first,second,score):
    if (choice == "A" and dict[first] > dict[second]) or (choice == "B" and dict[first] < dict[second]):
        print("Yes, You are right!")
        score += 1
        print_score(score)
        return True,score
    else:
        print(f"You lose with {score} score{'s' if score != 1 else ''}")
        return False, score
def print_score(score):
    print(f"Current score: {score}")