import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export const DHome = () => {
  return (
    <main className="p-6 space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Total Lessons</CardTitle>
            <CardDescription>Total number of available lessons</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">10</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Total Vocabulary</CardTitle>
            <CardDescription>
              Total number of available vocabulary
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">2,345</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Total Tutorials</CardTitle>
            <CardDescription>
              Total number of available tutorials
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">789</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Total Users</CardTitle>
            <CardDescription>
              Total number of available register users
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">1.2%</p>
          </CardContent>
        </Card>
      </div>
    </main>
  );
};
