# my-pwp-rolopez
PWP website to showcase Robbie Lopez unique entrepreneurial skill set

## Milestone 1 Feedback
Very nice work on your Persona, Use Case, purpose, audience and goal(s). You have a great direction outlined in detail for your freelance development work, and you have a very thoughtful understanding of the needs and frustrations of the client base you're looking to target.

Based on your content here, it looks like you're planning on marketing yourself as a one-stop-shop freelance web developer, digital marketer, and small business consultant. Down the line your website needs will probably be well be beyond the scope of this small project. Given that you are clear regarding your direction and you have a good understanding of the clients you would like to work with I think you're positioned very well to create a great MVP that serves both your needs and those of your end users. With a good design and content strategy you can create a page that will give you a great start. Looking forward to seeing your content strategy and UI design choices in Milestone 2a.

Overall your HTML is looking good - but there were a few technical points I wanted to bring to your attention. See **Edits &amp; Suggestions** below. 

Your Milestone 1 passes at [Tier III](https://bootcamp-coders.cnm.edu/projects/personal/rubric/) - nice job. You're clear to begin work on [Milestone 2&alpha;](https://bootcamp-coders.cnm.edu/projects/personal/milestone-two/). Go ahead and read the documentation on bootcamp-coders.cnm.edu, and I will be going over [Milestone 2&alpha;](https://bootcamp-coders.cnm.edu/projects/personal/milestone-two/) in class on Monday 5/1.

### Edits &amp; Suggestions
Really nice work overall with the HTML. There are only a few very minor points I want to nitpick on:
- Using all caps in your HTML tags is very 1997 (lines 4, 84). Nobody does that anymore.
- Place your paragraph content inside &lt;p&gt; tags.
- Don't overuse the &lt;br&gt; tag to space out your content. Use &lt;p&gt; tags, and `margin` or `padding` in CSS instead.
- Delete the empty &lt;header&gt; if it's not serving a purpose.
- Line 4 should be `/node_modules` in your `.gitignore` file. (Just replace the "-" with a "\_")

## Milestone 2&alpha; Feedback

I like that you've chosen a color scheme, and given me a good idea of what you want your site to look like. Having this much detail in your 'wireframe' will help quite a bit when it comes to coding.

According to [W3 Validator](https://validator.w3.org/nu/?doc=https%3A%2F%2Fbootcamp-coders.cnm.edu%2F~llopez165%2Fmy-pwp-rolopez%2Fpublic_html%2Fdocumentation%2Fmilestone-2.php) you haven't included any alt attributes for any of your images. The alt description doesn't have to be elaborate, but alt is typically required for any `<img>` tag. I noticed that you left out an important piece of the HTML puzzle, which is: `<meta name="viewport" content="width=device-width, initial-scale=1">` within the `<head>` tags. That `<meta>` tag is important for responsive development. Your `<header>` tag is also lacking content. If you take the `<h1>` tag from line 29 and put it in the `<header>` tag that would solve that issue.

Your description for each section of your PWP is a little lacking in detail. The layout looks nice in your wireframes, but you're using generated content, and I don't have a good understanding of what you'll include in each section. Milestone 2&alpha; requires you to create a little more detail for each section of your site: "[Explain your content plan in detail in one paragraph or less per content section.](https://bootcamp-coders.cnm.edu/projects/personal/milestone-two/)"

I just want to make sure that you're aware that the PWP is expected to be a one page website, at least until you graduate. That may mess with your background image and how it flows with each content section. 

Your mobile wireframes look good as well, however, we recommend that you stay away from a horizontal menu bar and go with a standard Bootstrap nav, which collapses into a button upon hitting the MD to XS screen size. Horizontal navbars are unwieldy when you reach smaller sized screens, and you never know what size the user's screen will be when they visit your site.

Your contact section on both the desktop and mobile wireframes are lacking a contact form, which is required for the final PWP [grading rubric](https://bootcamp-coders.cnm.edu/projects/personal/rubric/).

I would recommend adding some additional content to break down what each section is going to accomplish. Nothing long or fancy. I think you have a good handle on what your final site is going to look like, which is a huge advantage when it comes to coding. I'm looking forward to seeing everything come together!

grade Tier III - Great job! https://bootcamp-coders.cnm.edu/projects/personal/rubric/
