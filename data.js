var APP_DATA = {
  "scenes": [
    {
      "id": "0-hall",
      "name": "HALL",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        }
      ],
      "faceSize": 320,
      "initialViewParameters": {
        "yaw": -1.0116049003729692,
        "pitch": 0.046480361116937985,
        "fov": 1.489667856106396
      },
      "linkHotspots": [
        {
          "yaw": 0.860149362149393,
          "pitch": 0.10559411408787334,
          "rotation": 0,
          "target": "1-dining"
        },
        {
          "yaw": -0.16339382181125295,
          "pitch": 0.045413119023056225,
          "rotation": 0,
          "target": "2-guest-room"
        },
        {
          "yaw": -2.161595510878076,
          "pitch": 0.11918126342490787,
          "rotation": 0,
          "target": "3-kids-room"
        },
        {
          "yaw": 0.3230747385419406,
          "pitch": 0.05982029403695499,
          "rotation": 0,
          "target": "4-kitchen"
        },
        {
          "yaw": 1.665916964445219,
          "pitch": 0.17891555562492023,
          "rotation": 0,
          "target": "5-master-bedroom"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-dining",
      "name": "DINING",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        }
      ],
      "faceSize": 320,
      "initialViewParameters": {
        "yaw": -0.3078092765744209,
        "pitch": 0.17868041613722419,
        "fov": 1.489667856106396
      },
      "linkHotspots": [
        {
          "yaw": 1.5084934741744611,
          "pitch": 0.07143547485158308,
          "rotation": 0,
          "target": "0-hall"
        },
        {
          "yaw": 1.0276265238081415,
          "pitch": 0.1098922901517696,
          "rotation": 0,
          "target": "3-kids-room"
        },
        {
          "yaw": 2.0231922197681707,
          "pitch": 0.10811705160130458,
          "rotation": 0,
          "target": "2-guest-room"
        },
        {
          "yaw": 2.95018005778911,
          "pitch": 0.28251453823857453,
          "rotation": 0,
          "target": "4-kitchen"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-guest-room",
      "name": "GUEST ROOM",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        }
      ],
      "faceSize": 320,
      "initialViewParameters": {
        "yaw": 0.9370379717787536,
        "pitch": 0.11134561567291712,
        "fov": 1.489667856106396
      },
      "linkHotspots": [
        {
          "yaw": -0.99305077444237,
          "pitch": 0.15502591138540112,
          "rotation": 0,
          "target": "0-hall"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-kids-room",
      "name": "KIDS ROOM",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        }
      ],
      "faceSize": 320,
      "initialViewParameters": {
        "yaw": 0.7840786739411012,
        "pitch": 0.049709269599322425,
        "fov": 1.489667856106396
      },
      "linkHotspots": [
        {
          "yaw": -1.9764056263549499,
          "pitch": 0.24741747590206842,
          "rotation": 0,
          "target": "0-hall"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-kitchen",
      "name": "KITCHEN",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        }
      ],
      "faceSize": 320,
      "initialViewParameters": {
        "yaw": -0.25111369850122855,
        "pitch": -0.014287094970345748,
        "fov": 1.489667856106396
      },
      "linkHotspots": [
        {
          "yaw": 2.6609864737277844,
          "pitch": 0.0921139406314353,
          "rotation": 0,
          "target": "1-dining"
        },
        {
          "yaw": -2.3882981602857623,
          "pitch": 0.06899374623732513,
          "rotation": 0,
          "target": "0-hall"
        },
        {
          "yaw": -2.5720226773747683,
          "pitch": 0.0492715941895856,
          "rotation": 0,
          "target": "5-master-bedroom"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-master-bedroom",
      "name": "MASTER BEDROOM",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        }
      ],
      "faceSize": 320,
      "initialViewParameters": {
        "yaw": 2.1507913766395967,
        "pitch": 0.14171397660912533,
        "fov": 1.489667856106396
      },
      "linkHotspots": [
        {
          "yaw": -2.2040797998874364,
          "pitch": 0.08283910944349238,
          "rotation": 0,
          "target": "0-hall"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": false,
    "viewControlButtons": true
  }
};
