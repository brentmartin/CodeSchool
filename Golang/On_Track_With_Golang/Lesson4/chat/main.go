package main

import (
	"chat/util"
	"fmt"
)

type guestConnection struct {
	ip       string
	userName string
}

func main() {
	ip := util.GetGuestIP()
	userName := "Kerry"
	gConn := guestConnection{ip: ip, userName: userName}

	fmt.Println(gConn)
}
