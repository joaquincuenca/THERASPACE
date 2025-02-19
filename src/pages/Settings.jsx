import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

function Settings() {
  return (
    <div>
      <Card>
        <CardHeader>Profile Settings</CardHeader>
        <CardContent>
          <form action="">
            <div className="">
              <div>
                <Label>Name</Label>
                <Input id="name" placeholder="Name" value="Ronel Vega" />
              </div>
              <div>
                <Label>Email</Label>
                <Input
                  id="name"
                  placeholder="Name of your project"
                  value="ronelvega@gmail.com"
                />
              </div>
              <div>
                <Label>Password</Label>
                <Input
                  id="name"
                  type="password"
                  placeholder="Name of your project"
                  value="Hello"
                />
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter>
          <Button>Update</Button>
        </CardFooter>
      </Card>
    </div>
  );
}

export default Settings;
