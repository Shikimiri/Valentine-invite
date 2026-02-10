$(document).ready(function () {

    let noClickCount = 0;
    let runawayEnabled = false;

    const noTexts = [
        "Are you sure?",
        "Please think about it.",
        "100% sure?",
        "Please reconsider?",
        "Ok last. Click no."
    ];

    $(".no").on("click", function () {
        noClickCount++;

        const btn = $(this);

        // Change GIF to crying
        $(".gif-pic").attr("src", "/assets/images/crying.gif");

        // Grow YES button
        let yes = $(".yes");
        yes.css({
            fontSize: (parseFloat(yes.css("font-size")) + 4) + "px"
        });

        // Change NO button text (first 5 clicks)
        if (noClickCount <= noTexts.length) {
            btn.text(noTexts[noClickCount - 1]);
        }

        // On 6th click → RUN IMMEDIATELY
        if (noClickCount === 6 && !runawayEnabled) {
            runawayEnabled = true;
            enableRunAway();
            moveButton(btn); // 👈 run instantly on click
        }
    });

    function enableRunAway() {
        $(".no").on("mouseenter", function () {
            moveButton($(this));
        });
    }

    function moveButton(btn) {
        const main = $("main");

        const maxX = main.width() - btn.outerWidth();
        const maxY = main.height() - btn.outerHeight();

        const randomX = Math.random() * maxX;
        const randomY = Math.random() * maxY;

        btn.css({
            position: "absolute",
            left: randomX + "px",
            top: randomY + "px",
            transition: "0.15s"
        });
    }

    // YES button behavior 💖
    $(".yes").on("click", function () {
        $(".gif-pic").attr("src", "/assets/images/excited.gif");
        $(".no").fadeOut();
        $(".title").text("SEE YOU!!!");
    });
});
