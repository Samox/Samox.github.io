# A/B Test in 5 min !

Have you ever met a coworker or client persuaded you should do *this* way while you think it'd be better *that* way ?

Instead of infinite debate what you need is **facts**!

## Let's Not Make a Choice

![WhyNotBoth](http://i0.kym-cdn.com/photos/images/original/000/538/731/0fc.gif)

The choice is not yours, it belongs to your **users**.

The aim of A/B testing (or split testing) is to scientifically prove that a solution A is better than a solution B to achieve a measurable goal.

You compare the two solutions by randomly offer one of the two solutions and then measure the effectiveness of each.

You'll need a **goal**, a **metric** and several **solutions** to test.

## We Want You To Join Us
#### Super Simple Example
At Theodo we want people to join us.

**Goal**: get visitors on the [join us page](www.theodo.fr/en/joinus/).

And by chance we love to write articles! One way to achieve our goal is to convert the *readers* in *appliers*.

**Metric**: Conversion rate *readers* -> *appliers*

Except some people want a *button* while others prefer a *link*.

**A/B Solutions**: *button*/*link*

## Let's Do This
#### What you shall not do
Allright, let's put a button for a couple weeks and then change to put a link.

After your experiment you see that you had 10 clicks during the two first weeks and 20 in the two last. The link seems better !

But wait, on the third week our CEO was invited on a [TV show](http://bfmbusiness.bfmtv.com/mediaplayer/video/coup-de-pouce-a-une-start-up-theodo-0406-827977.html). This introduce huge bias.

The experiment shall not be time dependent. Hence to avoid any bias we include randomness.

#### Let's code this right

To A/B test you don't need much.


```javascript
var ABDivInnerHtml
var myUrl = myUrl
var ABTest = Math.random() >= 0.5;
if (ABTest) {
  ABDivInnerHtml = "<button onclick=\"location.href='" + myUrl + "';\"> Join Us </button>";
} else {
  ABDivInnerHtml = "<a href=\"" + myUrl + "\"> Join Us </a>"
};
document.getElementById("ABDiv").innerHTML = ABDivInnerHtml;
```
```html
<div id="ABDiv"></div>
```

#### Is that all ?

Well you'll need a little more. How do we measure ?

A super easy solution is [Google Analytics](https://analytics.google.com/). It permits to many things I won't talk about it in this article except visitor counting and event monitoring.

1. create an account on [Google Analytics](https://analytics.google.com/) so you have a **Tracking ID**.

2. include this script in your header:
```javascript
  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

  var trackId = YourTrackingId
  ga('create', trackId, 'auto');
  ga('send', 'pageview');
```
the last line tracks the viewers of your page.

3. to watch an event call this [function](https://developers.google.com/analytics/devguides/collection/analyticsjs/events):
```javascript
ga('send', 'event', [eventCategory], [eventAction], [eventLabel])
```
for exemple if we want to track the clicks on the button for the JoinUs page:
```javascript
ga('send', 'event', 'button', 'click', 'Join Us')
```


## Et Voila !
Your file should look like this:
```html
<!DOCTYPE html>
<html>
  <head>
    <script>
      (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
      (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
      m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
      })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

      ga('create', 'UA-80819376-1', 'auto');
      ga('send', 'pageview');
    </script>
  </head>
  <body>

    <div id="ABDiv"></div>

    <script>
      var ABDivInnerHtml
      var yourUrl = "http://www.theodo.fr/en/joinus/developer"
      var ABTest = Math.random() >= 0.5;
      if (ABTest) {
        ABDivInnerHtml = "<button onclick=\"location.href='" + yourUrl + "'; ga('send', 'event', 'button', 'click', 'Join Us');\"> Join Us </button>";
      } else {
        ABDivInnerHtml = "<a onclick=\"ga('send', 'event', 'link', 'click', 'Join Us');\" href=\"" + yourUrl + "\"> Join Us </a>";
      };
      document.getElementById("ABDiv").innerHTML = ABDivInnerHtml;
    </script>

  </body>
</html>
```


The result gets significative once you've reached 25000 visitors.
This piece of code helped us to decide wether the button or a link at the end of a paragraph was more efficient (the button won with twice more clicks than the link).

A/B testing can be really quick to implement. It can be used in a lot of cases such as wording, images, interfaces, etc.

Think about it with a client or a coworker, would do to comfort him in his decision or to value your own idea, or just to be lean!

Now you can click on the button ;)
