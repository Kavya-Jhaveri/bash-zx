#!/bin/bash

while true;
do
    clear
    echo "TV Guide:"
    echo "1. Parrot Dancing"
    echo "2. Nyan Cat"
    echo "3. Emoji Race"
    echo "4. Quit"

    read -p "Enter your choice (1/2/3/4): " choice

    case $choice in
        1)
            echo "Parrot Dancing:"
            curl --max-time 5 parrot.live
            echo "Watch Something Else"
            read -p "Press Enter to continue...";;
        2)
            echo "Nyan Cat:"
            curl --max-time 5 https://poptart.spinda.net
            echo "Watch Something Else"
            read -p "Press Enter to continue...";;
        3)
            echo "Emoji Race:"
            curl --max-time 10 node-web-console.glitch.me
            echo "Watch Something Else"
            read -p "Press Enter to continue...";;
        4)
            echo "Goodbye!"
            exit 0;;
        *)
            echo "Invalid choice. Please enter a valid option (1/2/3/4)."
            read -p "Press Enter to continue...";;
    esac
done


