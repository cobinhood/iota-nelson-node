# iota-nelson-node with docker-compose

This repository contains the docker-compose file to get started with an iota node enhanced through Nelson

Nelson is a tool meant to be used with IOTA's IRI Node.
It automatically manages neighbors of your full node, negotiating connections,
finding new neighbors and protecting against bad actors.

## Getting Started

These instructions will get you a copy of iri - the iota node with nelson up and running on your local machine using docker and docker-compose.

### Prerequisites

It is expected that you have already installed docker, docker-compose and know how to start and use it.
Knowledge about your operating system (Windows, Linux, MacOS).

### Usage

Clone the repository
```
git clone https://github.com/ioiobzit/iota-nelson-node.git
```

Enter the iota-nelson-node folder
```
cd iota-nelson-node
```

Run it with:
```
docker-compose up -d
```
### Check the logs

Check the IRI logs with
```
docker logs iota
```

Check the Nelson logs with
```
docker logs nelson
```

### Update when a new release of IRI or Nelson is published

Go to your iota-nelson-node folder and update the docker images
```
cd iota-nelson-node
docker-compose pull
```

Run it with:
```
docker-compose up -d
```

### Warnings

The ports setup in the docker-compose.yml file opens following container ports
- 14600/udp
- 15600/tcp
- 14265
- 18600 on 0.0.0.0 (all IP adresses, internal and external)
- 16600 on 0.0.0.0 (all IP adresses, internal and external)

Please assure yourself to set your firewall accordingly
## More information

Please refer to the [iri project](https://github.com/iotaledger/iri) or [nelson project](https://github.com/SemkoDev/nelson.cli) for more information about the configuration files and further information about the node usage.

## Author

* **Antonio Nardella** - (https://github.com/ioiobzit)

## License

This project is licensed under the ICS License - see the [LICENSE.md](LICENSE.md) file for details

## Contributing

### Donations

**Donations always welcome**:

IOTA:
```
CHQAYWPQUGQ9GANEWISFH99XBMTZAMHFFMPHWCLUZPFKJTFDFIJXFWCBISUTVGSNW9JI9QCOAHUHFUQC9SYVFXDQ9D
```

BTC:
```
1BFgqtMC2nfRxPRge5Db3gkYK7kDwWRF79
```
