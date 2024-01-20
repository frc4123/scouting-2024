{"enable_google_sheets": "true",
          "title": "Scouting PASS 2022",
          "page_title": "Rapid React",
    "dataFormat": "tsv",
    "title": "Scouting PASS 2024",
    "page_title": "Crescendo",
    "checkboxAs": "10",
    "prematch": [
        {
            "name": "Scouter Initials",
            "gsCol": "scouter",
            "code": "s",
            "type": "scouter",
            "size": 5,
            "maxSize": 5,
            "required": "true"
        },
        {
            "name": "Event",
            "gsCol": "Event",
            "code": "e",
            "type": "event",
            "defaultValue": "2020ilch",
            "required": "true"
        },
        {
            "name": "Match Level",
            "gsCol": "Match Level",
            "code": "l",
            "type": "level",
            "choices": {
                "qm": "Quals<br>",
                "sf": "Semifinals<br>",
                "f": "Finals"
            },
            "defaultValue": "qm",
            "required": "true"
        },
        {
            "name": "Match #",
            "gsCol": "Match Number",
            "code": "m",
            "type": "match",
            "min": 1,
            "max": 150,
            "required": "true"
        },
        {
            "name": "Robot",
            "gsCol": "Robot",
            "code": "r",
            "type": "robot",
            "choices": {
                "r1": "Red-1",
                "b1": "Blue-1<br>",
                "r2": "Red-2",
                "b2": "Blue-2<br>",
                "r3": "Red-3",
                "b3": "Blue-3"
            },
            "required": "true"
        },
        {
            "name": "Team #",
            "code": "t",
            "type": "team",
            "min": 1,
            "max": 99999
        },
        {
            "name": "Auto Start Position",
            "gsCol": "Auto Start Position",
            "code": "as",
            "type": "clickable_image",
            "filename": "2024/field_image.png",
            "clickRestriction": "one",
            "allowableResponses": "1 12 13 24 25 36 37 48 49 60 61 72",
            "shape": "circle 5 black red true"
        }
    ],
    "auton": [
        {
            "name": "Leave Starting Zone",
            "gsCol": "Leave Starting Zone",
            "code": "al",
            "type": "bool"
        },
        {
            "name": "Amp Scores",
            "gsCol": "Auto Amp",
            "code": "aas",
            "type": "counter"
        },
        {
            "name": "Speaker Scores",
            "gsCol": "Auto Speaker",
            "code": "ass",
            "type": "counter"
        }
    ],
    "teleop": [
        {
            "name": "Amp Scores",
            "gsCol": "Teleop Amp",
            "code": "tas",
            "type": "counter"
        },
        {
            "name": "Speaker Scores",
            "gsCol": "Teleop Speaker",
            "code": "tss",
            "type": "counter"
        },
        {
            "name": "Times Amplified",
            "gsCol": "Times Amplified",
            "code": "tta",
            "type": "counter"
        },
        {
            "name": "Pickup From",
            "gsCol": "Pickup From",
            "code": "tpu",
            "type": "radio",
            "choices": {
                "s": "Source<br>",
                "f": "Floor<br>",
                "b": "Both<br>",
                "x": "Not Attempted"
            },
            "defaultValue": "x"
        }
    ],
    "endgame": [
        {
            "name": "Stage Timer",
            "gsCol": "Stage Timer",
            "code": "dt",
            "type": "timer"
        },
        {
            "name": "Final Status",
            "gsCol": "Final Status",
            "code": "fs",
            "type": "radio",
            "choices": {
                "p": "Parked<br>",
                "o": "Onstage<br>",
                "s": "Onstage (Spotlit)<br>",
                "h": "Harmony<br>",
                "a": "Attempted but failed<br>",
                "x": "Not attempted"
            },
            "defaultValue": "x"
        },
        {
            "name": "Note in Trap",
            "gsCol": "Note in Trap",
            "code": "nit",
            "type": "bool"
        }
    ],
    "postmatch": [
        {
            "name": "Driver Skill",
            "gsCol": "Driver Skill",
            "code": "ds",
            "type": "radio",
            "choices": {
                "n": "Not Effective<br>",
                "a": "Average<br>",
                "v": "Very Effective<br>",
                "x": "Not Observed"
            },
            "defaultValue": "x"
        },
        {
            "name": "Defense Rating",
            "gsCol": "Defense Rating",
            "code": "dr",
            "type": "radio",
            "choices": {
                "b": "Below Average<br>",
                "a": "Average<br>",
                "g": "Good<br>",
                "e": "Excellent<br>",
                "x": "Did not play defense"
            },
            "defaultValue": "x"
        },
        {
            "name": "Speed Rating",
            "gsCol": "Speed Rating",
            "code": "sr",
            "type": "radio",
            "choices": {
                "1": "1 (slow)<br>",
                "2": "2<br>",
                "3": "3<br>",
                "4": "4<br>",
                "5": "5 (fast)"
            },
            "defaultValue": "3"
        },
        {
            "name": "Died/Immobilized",
            "gsCol": "Died/Immobilized",
            "code": "die",
            "type": "bool"
        },
        {
            "name": "Tippy<br>(almost tipped over)",
            "gsCol": "Almost Tipped Over",
            "code": "tip",
            "type": "bool"
        },
        {
            "name": "Dropped Notes (>2)",
            "gsCol": "Dropped Notes",
            "code": "dn",
            "type": "bool"
        },
        {
            "name": "Make good<br>alliance partner?",
            "gsCol": "Make good alliance partner",
            "tooltip": "Would you want this robot on your alliance in eliminations?",
            "code": "all",
            "type": "bool"
        },
        {
            "name": "Comments",
            "gsCol": "Comments",
            "code": "co",
            "type": "text",
            "size": 15,
            "maxSize": 55
        }
    ]
}
