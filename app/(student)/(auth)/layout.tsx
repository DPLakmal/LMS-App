import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import LoginForm from "./_ui/login-form";

const AuthPageLayout = ({ children }: { children: React.ReactNode }) => {
    return (<>
        <div className="h-screen w-full flex items-center justify-center">
            <Card>
                <CardHeader className="text-center space-y-2 text-2xl">
                    <CardTitle >E - Learning Management System</CardTitle>
                    <CardDescription>ATI - GALLE</CardDescription>
                </CardHeader>
                <div className=" border-2 mb-3"></div>
                <CardContent>
                    {children}
                    {/* <LoginForm /> */}
                </CardContent>
                <CardFooter>
                    <p>Card Footer</p>
                </CardFooter>
            </Card>
        </div>

    </>);
}

export default AuthPageLayout;