import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/Card';

export default function ShareExperienceSection() {
  return (
    <div className="mt-1 flex justify-center" data-aos="zoom-in">
      <Card className="max-w-md w-full text-center border border-indigo-300 dark:border-indigo-800 shadow-lg hover:shadow-xl transition-all duration-300 rounded-2xl">
        <CardHeader>
          <CardTitle className="text-xl font-synonym font-bold">
            Share Your Experience
          </CardTitle>
          <CardDescription className="text-sm font-satoshi text-gray-600 dark:text-gray-400">
            We'd love to feature your story! Send us your testimonial.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <a
            href="mailto:pati.dhrubaraj@outlook.com?subject=My%20MultiCalc%20Testimonial&body=Hi%20MultiCalc%20Team%2C%0D%0A%0D%0AHere%20is%20my%20testimonial%3A%0D%0A"
            className="inline-block bg-indigo-600 text-white px-5 py-2 rounded-lg font-semibold shadow-md hover:bg-indigo-800 hover:shadow-lg transition"
          >
            Write Testimonial
          </a>
        </CardContent>
      </Card>
    </div>
  );
}
