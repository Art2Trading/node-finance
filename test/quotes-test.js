"use strict";

const test = require("tape");

const quotes = require("../lib/quotes");

test("Quotes tests", t => {
    t.plan(4);

    quotes.getQuotes(["YHOO"], new Date("Sat Aug 06 2011 12:00:00"),
        (err, res) => {
            t.ok(!err && res[0].beforeRefDate.length > 0,
                "get quotes before ref date in the past");
            t.ok(!err && res[0].afterRefDate.length > 0,
                "get quotes after ref date in the past");
        });

    quotes.getQuotes(["YHOO"], new Date(), (err, res) => {
        t.ok(!err && res[0].beforeRefDate.length > 0,
            "get quotes before today");
        t.ok(!err && res[0].afterRefDate.length === 0,
            "get quotes after today");
    });
});
