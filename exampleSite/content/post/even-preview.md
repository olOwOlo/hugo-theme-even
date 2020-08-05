---
title: "Theme preview"
date: 2018-07-10T00:00:00+08:00
lastmod: 2018-07-10T00:00:00+08:00
draft: false
tags: ["preview", "Theme preview", "tag-3"]
categories: ["Theme preview", "category-2", "category-3"]

weight: 10
contentCopyright: MIT
mathjax: true
autoCollapseToc: true

---

> Based on [MarkdownPreview test.md](https://github.com/facelessuser/MarkdownPreview/blob/master/examples/test.md).

# Markdown

```
# H1
## H2
### H3
#### H4
##### H5
###### H6
### Duplicate Header
### Duplicate Header
```

# H1
## H2
### H3
#### H4
##### H5
###### H6
### Duplicate Header
### Duplicate Header

## Paragraphs

```
This is a paragraph.
I am still part of the paragraph.

New paragraph.
```

This is a paragraph.
I am still part of the paragraph.

New paragraph.

## Anchor

*Define anchor by `{#section-id}`*

[Something](#section-7)

## Footnote

This is a footnote[^1]

A footnote on "label"[^label]

The footnote for definition[^!DEF]

A footnote with link[^pa]

[^1]: This is a footnote
[^label]: A footnote on "label"
[^pa]: [Markdown Cheatsheet](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet)
[^!DEF]: The footnote for definition


## Inline

```
`inline block`

<kbd>ctrl</kbd>+<kbd>alt</kbd>+<kbd>del</kbd>

**bold 1** and __bold 2__

*italic 1*  and _italic 2_

~~strike~~


***bold 1 and italic 1***

___bold 2 and italic 2___

__*bold 2 and italic 1*__

**_bold 1 and italic 2_**


~~*strike italic 1*~~ and *~~strike italic 2~~*

~~_strike italic 2_~~ and  _~~strike italic 2~~_


~~**strike bold 1**~~ and **~~strike bold 1~~**

~~__strike bold 2__~~ and __~~strike bold 2~~__


~~***strike italic 1 bold 1***~~ and ***~~strike italic 1 bold 1~~***

~~___strike italic 2 bold 2___~~ and ___~~strike italic 2 bold 2~~___

**~~*strike italic 1 bold 1*~~** and *~~**strike italic 1 bold 1**~~*

__~~_strike italic 2 bold 2_~~__ and _~~__strike italic 2 bold 2__~~_

**~~_strike italic 2 bold 1_~~** and _~~**strike italic 2 bold 1**~~_

__~~*strike italic 1 bold 2*~~__ and *~~__strike italic 1 bold 2__~~*

```

`inline block`

<kbd>ctrl</kbd>+<kbd>alt</kbd>+<kbd>del</kbd>

**bold 1** and __bold 2__

*italic 1*  and _italic 2_

~~strike~~


***bold 1 and italic 1***

___bold 2 and italic 2___

__*bold 2 and italic 1*__

**_bold 1 and italic 2_**


~~*strike italic 1*~~ and *~~strike italic 2~~*

~~_strike italic 2_~~ and  _~~strike italic 2~~_


~~**strike bold 1**~~ and **~~strike bold 1~~**

~~__strike bold 2__~~ and __~~strike bold 2~~__


~~***strike italic 1 bold 1***~~ and ***~~strike italic 1 bold 1~~***

~~___strike italic 2 bold 2___~~ and ___~~strike italic 2 bold 2~~___

**~~*strike italic 1 bold 1*~~** and *~~**strike italic 1 bold 1**~~*

__~~_strike italic 2 bold 2_~~__ and _~~__strike italic 2 bold 2__~~_

**~~_strike italic 2 bold 1_~~** and _~~**strike italic 2 bold 1**~~_

__~~*strike italic 1 bold 2*~~__ and *~~__strike italic 1 bold 2__~~*


## Links

```
Web image
![Web Picture](https://count.getloli.com/get/@even-preview?theme=konachan "Web Picture")

Local image
![Local Picture](logo-revolunet-carre.jpg "Local Picture")

contact@revolunet.com

@revolunet

Issue #1

https://github.com/revolunet/sublimetext-markdown-preview/

This is a link https://github.com/revolunet/sublimetext-markdown-preview/.

This is a link "https://github.com/revolunet/sublimetext-markdown-preview/".

With this link (https://github.com/revolunet/sublimetext-markdown-preview/), it still works.
```

Web image
![Web Picture](https://count.getloli.com/get/@even-preview?theme=konachan "Web Picture")

Local image
![Local Picture](/apple-touch-icon.png "Local Picture")

www.google.com

contact@revolunet.com

@revolunet

Issue #1

https://github.com/revolunet/sublimetext-markdown-preview/

This is a link https://github.com/revolunet/sublimetext-markdown-preview/.

This is a link "https://github.com/revolunet/sublimetext-markdown-preview/".

With this link (https://github.com/revolunet/sublimetext-markdown-preview/), it still works.

## Abbreviation

Abbreviations source are found in a separate markdown file specified in frontmatter.
```
The HTML specification 
is maintained by the W3C.

*[HTML]: Hyper Text Markup Language
*[W3C]:  World Wide Web Consortium
```

The HTML specification 
is maintained by the W3C.

## Unordered List

```
Unordered List

- item 1
    * item A
    * item B
        more text
        + item a
        + item b
        + item c
    * item C
- item 2
- item 3
```

Unordered List

- item 1
    * item A
    * item B
        more text
        + item a
        + item b
        + item c
    * item C
- item 2
- item 3


## Ordered List

```
Ordered List

1. item 1
    1. item A
    2. item B
        more text
        1. item a
        2. item b
        3. item c
    3. item C
2. item 2
3. item 3
```

Ordered List

1. item 1
    1. item A
    2. item B
        more text
        1. item a
        2. item b
        3. item c
    3. item C
2. item 2
3. item 3

## Task List

```
Task List

- [X] item 1
    * [X] item A
    * [ ] item B
        more text
        + [x] item a
        + [ ] item b
        + [x] item c
    * [X] item C
- [ ] item 2
- [ ] item 3
```

Task List

- [X] item 1
    * [X] item A
    * [ ] item B
        more text
        + [x] item a
        + [ ] item b
        + [x] item c
    * [X] item C
- [ ] item 2
- [ ] item 3

## Mixed Lists

`Really Mixed Lists` should break with `sane_lists` on.

```
Mixed Lists

- item 1
    * [X] item A
    * [ ] item B
        more text
        1. item a
        2. itemb
        3. item c
    * [X] item C
- item 2
- item 3


Really Mixed Lists

- item 1
    * [X] item A
    - item B
        more text
        1. item a
        + itemb
        + [ ] item c
    3. item C
2. item 2
- [X] item 3
```

Mixed Lists

- item 1
    * [X] item A
    * [ ] item B
        more text
        1. item a
        2. itemb
        3. item c
    * [X] item C
- item 2
- item 3


Really Mixed Lists

- item 1
    * [X] item A
    - item B
        more text
        1. item a
        + itemb
        + [ ] item c
    3. item C
2. item 2
- [X] item 3


## Dictionary

```
Dictionary
:   item 1

    item 2

    item 3
```

Dictionary
:   item 1

    item 2

    item 3

## Blocks

```
    This is a block.
    
    This is more of a block.

```

    This is a block.
    
    This is more of a block.


## Block Quotes

```
> This is a block quote
>> How does it look?
```

> This is a block quote.
>> How does it look?
> I think it looks good.

## Fenced Block

Assuming guessing is not enabled.

`````
```
// Fenced **without** highlighting
function doIt() {
    for (var i = 1; i <= slen ; i^^) {
        setTimeout("document.z.textdisplay.value = newMake()", i*300);
        setTimeout("window.status = newMake()", i*300);
    }
}
```

```javascript
// Fenced **with** highlighting
function doIt() {
    for (var i = 1; i <= slen ; i^^) {
        setTimeout("document.z.textdisplay.value = newMake()", i*300);
        setTimeout("window.status = newMake()", i*300);
    }
}
```
`````

```
// Fenced **without** highlighting
function doIt() {
    for (var i = 1; i <= slen ; i^^) {
        setTimeout("document.z.textdisplay.value = newMake()", i*300);
        setTimeout("window.status = newMake()", i*300);
    }
}
```

```javascript
// Fenced **with** highlighting
function doIt() {
    for (var i = 1; i <= slen ; i^^) {
        setTimeout("document.z.textdisplay.value = newMake()", i*300);
        setTimeout("window.status = newMake()", i*300);
    }
}
```

## Tables

```
| _Colors_      | Fruits          | Vegetable         |
| ------------- |:---------------:| -----------------:|
| Red           | *Apple*         | [Pepper](#Tables) |
| ~~Orange~~    | Oranges         | **Carrot**        |
| Green         | ~~***Pears***~~ | Spinach           |
```

| _Colors_      | Fruits          | Vegetable    |
| ------------- |:---------------:| ------------:|
| Red           | *Apple*         | Pepper       |
| ~~Orange~~    | Oranges         | **Carrot**   |
| Green         | ~~***Pears***~~ | Spinach      |

Class or Enum           | Year                                                                                  | Month                                                                                 |                                          Day                                          |                                         Hours                                         |                                        Minutes                                        | Seconds*                                                                              |                                      Zone Offset                                      |                                        Zone ID                                        | toString Output                                    | Where Discussed                                                                                    
----------------------- | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- |:-------------------------------------------------------------------------------------:|:-------------------------------------------------------------------------------------:|:-------------------------------------------------------------------------------------:| ------------------------------------------------------------------------------------- |:-------------------------------------------------------------------------------------:|:-------------------------------------------------------------------------------------:| -------------------------------------------------- | ---------------------------------------------------------------------------------------------------
`Instant`        |                                                                                       |                                                                                       |                                                                                       |                                                                                       |                                                                                       | <center>![checked](/favicon-16x16.png)</center> |                                                                                       |                                                                                       | `2013-08-20T15:16:26.355Z`                  | [Instant Class](https://docs.oracle.com/javase/tutorial/datetime/iso/instant.html)                 
`LocalDate`      | <center>![checked](/favicon-16x16.png)</center> | <center>![checked](/favicon-16x16.png)</center> | <center>![checked](/favicon-16x16.png)</center> |                                                                                       |                                                                                       |                                                                                       |                                                                                       |                                                                                       | `2013-08-20`                                | [Date Classes](https://docs.oracle.com/javase/tutorial/datetime/iso/date.html)                     
`LocalDateTime`  | <center>![checked](/favicon-16x16.png)</center> | <center>![checked](/favicon-16x16.png)</center> | <center>![checked](/favicon-16x16.png)</center> | <center>![checked](/favicon-16x16.png)</center> | <center>![checked](/favicon-16x16.png)</center> | <center>![checked](/favicon-16x16.png)</center> |                                                                                       |                                                                                       | `2013-08-20T08:16:26.937`                   | [Date and Time Classes](https://docs.oracle.com/javase/tutorial/datetime/iso/datetime.html)        
`ZonedDateTime`  | <center>![checked](/favicon-16x16.png)</center> | <center>![checked](/favicon-16x16.png)</center> | <center>![checked](/favicon-16x16.png)</center> | <center>![checked](/favicon-16x16.png)</center> | <center>![checked](/favicon-16x16.png)</center> | <center>![checked](/favicon-16x16.png)</center> | <center>![checked](/favicon-16x16.png)</center> | <center>![checked](/favicon-16x16.png)</center> | `2013-08-21T00:16:26.941+09:00[Asia/Tokyo]` | [Time Zone and Offset Classes](https://docs.oracle.com/javase/tutorial/datetime/iso/timezones.html)
`LocalTime`      |                                                                                       |                                                                                       |                                                                                       | <center>![checked](/favicon-16x16.png)</center> | <center>![checked](/favicon-16x16.png)</center> | <center>![checked](/favicon-16x16.png)</center> |                                                                                       |                                                                                       | `08:16:26.943`                              | [Date and Time Classes](https://docs.oracle.com/javase/tutorial/datetime/iso/datetime.html)        
`MonthDay`       |                                                                                       | <center>![checked](/favicon-16x16.png)</center> | <center>![checked](/favicon-16x16.png)</center> |                                                                                       |                                                                                       |                                                                                       |                                                                                       |                                                                                       | `--08-20`                                   | [Date Classes](https://docs.oracle.com/javase/tutorial/datetime/iso/date.html)                     
`Year`           | <center>![checked](/favicon-16x16.png)</center> |                                                                                       |                                                                                       |                                                                                       |                                                                                       |                                                                                       |                                                                                       |                                                                                       | `2013`                                      | [Date Classes](https://docs.oracle.com/javase/tutorial/datetime/iso/date.html)                     
`YearMonth`      | <center>![checked](/favicon-16x16.png)</center> | <center>![checked](/favicon-16x16.png)</center> |                                                                                       |                                                                                       |                                                                                       |                                                                                       |                                                                                       |                                                                                       | `2013-08`                                   | [Date Classes](https://docs.oracle.com/javase/tutorial/datetime/iso/date.html)                     
`Month`          |                                                                                       | <center>![checked](/favicon-16x16.png)</center> |                                                                                       |                                                                                       |                                                                                       |                                                                                       |                                                                                       |                                                                                       | `AUGUST`                                    | [DayOfWeek and Month Enums](https://docs.oracle.com/javase/tutorial/datetime/iso/enum.html)        
`OffsetDateTime` | <center>![checked](/favicon-16x16.png)</center> | <center>![checked](/favicon-16x16.png)</center> | <center>![checked](/favicon-16x16.png)</center> | <center>![checked](/favicon-16x16.png)</center> | <center>![checked](/favicon-16x16.png)</center> | <center>![checked](/favicon-16x16.png)</center> | <center>![checked](/favicon-16x16.png)</center> |                                                                                       | `2013-08-20T08:16:26.954-07:00`             | [Time Zone and Offset Classes](https://docs.oracle.com/javase/tutorial/datetime/iso/timezones.html)
`OffsetTime`     |                                                                                       |                                                                                       |                                                                                       | <center>![checked](/favicon-16x16.png)</center> | <center>![checked](/favicon-16x16.png)</center> | <center>![checked](/favicon-16x16.png)</center> | <center>![checked](/favicon-16x16.png)</center> |                                                                                       | `08:16:26.957-07:00`                        | [Time Zone and Offset Classes](https://docs.oracle.com/javase/tutorial/datetime/iso/timezones.html)
`Duration`       |                                                                                       |                                                                                       |                                          \**                                          |                                          \**                                          |                                          \**                                          | <center>![checked](/favicon-16x16.png)</center> |                                                                                       |                                                                                       | `PT20H` (20 hours)                          | [Period and Duration](https://docs.oracle.com/javase/tutorial/datetime/iso/period.html)            
`Period`         | <center>![checked](/favicon-16x16.png)</center> | <center>![checked](/favicon-16x16.png)</center> | <center>![checked](/favicon-16x16.png)</center> |                                                                                       |                                                                                       |                                                                                       |                                         \***                                          |                                         \***                                          | `P10D` (10 days)                            | [Period and Duration](https://docs.oracle.com/javase/tutorial/datetime/iso/period.html)            

## Smart Strong

```
Text with double__underscore__words.

__Strong__ still works.

__this__works__too__
```

Text with double__underscore__words.

__Strong__ still works.

__this__works__too__

## Smarty

```
"double quotes"

'single quotes'

da--sh

elipsis...
```

"double quotes"

'single quotes'

da--sh

elipsis...

## Neseted Fences

````
    ```
    This will still be parsed
    as a normal indented code block.
    ```

```
This will still be parsed
as a fenced code block.
```

- This is a list that contains multiple code blocks.

    - Here is an indented block

            ```
            This will still be parsed
            as a normal indented code block.
            ```

    - Here is a fenced code block:

        ```
        This will still be parsed
        as a fenced code block.
        ```

        > ```
        > Blockquotes?
        > Not a problem!
        > ```
````

    ```
    This will still be parsed
    as a normal indented code block.
    ```

```
This will still be parsed
as a fenced code block.
```

- This is a list that contains multiple code blocks.

    - Here is an indented block

            ```
            This will still be parsed
            as a normal indented code block.
            ```

    - Here is a fenced code block:

        ```
        This will still be parsed
        as a fenced code block.
        ```

        > ```
        > Blockquotes?
        > Not a problem!
        > ```

# Others

## Github Emoji {#section-7}

```
This is a test for emoji :smile:.  The emojis are images linked to github assets :octocat:.
```

This is a test for emoji :smile:.  The emojis are images linked to github assets :octocat:.

### People

:+1::-1::alien::angel::anger::angry::anguished::astonished::baby::blue_heart::blush::boom::bow::bowtie::boy::bride_with_veil::broken_heart::bust_in_silhouette::busts_in_silhouette::clap::cold_sweat::collision::confounded::confused::construction_worker::cop::couple::couple_with_heart::couplekiss::cry::crying_cat_face::cupid::dancer::dancers::dash::disappointed::disappointed_relieved::dizzy::dizzy_face::droplet::ear::exclamation::expressionless::eyes::facepunch::family::fearful::feelsgood::feet::finnadie::fire::fist::flushed::frowning::fu::girl::goberserk::godmode::green_heart::grey_exclamation::grey_question::grimacing::grin::grinning::guardsman::haircut::hand::hankey::hear_no_evil::heart::heart_eyes::heart_eyes_cat::heartbeat::heartpulse::hurtrealbad::hushed::imp::information_desk_person::innocent::japanese_goblin::japanese_ogre::joy::joy_cat::kiss::kissing::kissing_cat::kissing_closed_eyes::kissing_heart::kissing_smiling_eyes::laughing::lips::love_letter::man::man_with_gua_pi_mao::man_with_turban::mask::massage::metal::muscle::musical_note::nail_care::neckbeard::neutral_face::no_good::no_mouth::nose::notes::ok_hand::ok_woman::older_man::older_woman::open_hands::open_mouth::pensive::persevere::person_frowning::person_with_blond_hair::person_with_pouting_face::point_down::point_left::point_right::point_up::point_up_2::poop::pouting_cat::pray::princess::punch::purple_heart::question::rage::rage1::rage2::rage3::rage4::raised_hand::raised_hands::raising_hand::relaxed::relieved::revolving_hearts::runner::running::satisfied::scream::scream_cat::see_no_evil::shit::skull::sleeping::sleepy::smile::smile_cat::smiley::smiley_cat::smiling_imp::smirk::smirk_cat::sob::sparkles::sparkling_heart::speak_no_evil::speech_balloon::star::star2::stuck_out_tongue::stuck_out_tongue_closed_eyes::stuck_out_tongue_winking_eye::sunglasses::suspect::sweat::sweat_drops::sweat_smile::thought_balloon::thumbsdown::thumbsup::tired_face::tongue::triumph::trollface::two_hearts::two_men_holding_hands::two_women_holding_hands::unamused::v::walking::wave::weary::wink::woman::worried::yellow_heart::yum::zzz:

### Nature

:ant::baby_chick::bear::bee::beetle::bird::blossom::blowfish::boar::bouquet::bug::cactus::camel::cat::cat2::cherry_blossom::chestnut::chicken::cloud::cow::cow2::crescent_moon::crocodile::cyclone::deciduous_tree::dog::dog2::dolphin::dragon::dragon_face::dromedary_camel::ear_of_rice::earth_africa::earth_americas::earth_asia::elephant::evergreen_tree::fallen_leaf::first_quarter_moon::first_quarter_moon_with_face::fish::foggy::four_leaf_clover::frog::full_moon::full_moon_with_face::globe_with_meridians::goat::hamster::hatched_chick::hatching_chick::herb::hibiscus::honeybee::horse::koala::last_quarter_moon::last_quarter_moon_with_face::leaves::leopard::maple_leaf::milky_way::monkey::monkey_face::moon::mouse::mouse2::mushroom::new_moon::new_moon_with_face::night_with_stars::ocean::octocat::octopus::ox::palm_tree::panda_face::partly_sunny::paw_prints::penguin::pig::pig2::pig_nose::poodle::rabbit::rabbit2::racehorse::ram::rat::rooster::rose::seedling::sheep::shell::snail::snake::snowflake::snowman::squirrel::sun_with_face::sunflower::sunny::tiger::tiger2::tropical_fish::tulip::turtle::umbrella::volcano::waning_crescent_moon::waning_gibbous_moon::water_buffalo::waxing_crescent_moon::waxing_gibbous_moon::whale::whale2::wolf::zap:

### Objects

:8ball::alarm_clock::apple::art::athletic_shoe::baby_bottle::balloon::bamboo::banana::bar_chart::baseball::basketball::bath::bathtub::battery::beer::beers::bell::bento::bicyclist::bikini::birthday::black_joker::black_nib::blue_book::bomb::book::bookmark::bookmark_tabs::books::boot::bowling::bread::briefcase::bulb::cake::calendar::calling::camera::candy::card_index::cd::chart_with_downwards_trend::chart_with_upwards_trend::cherries::chocolate_bar::christmas_tree::clapper::clipboard::closed_book::closed_lock_with_key::closed_umbrella::clubs::cocktail::coffee::computer::confetti_ball::cookie::corn::credit_card::crown::crystal_ball::curry::custard::dango::dart::date::diamonds::dollar::dolls::door::doughnut::dress::dvd::e-mail::egg::eggplant::electric_plug::email::envelope::envelope_with_arrow::euro::eyeglasses::fax::file_folder::fireworks::fish_cake::fishing_pole_and_fish::flags::flashlight::flipper::floppy_disk::flower_playing_cards::football::footprints::fork_and_knife::fried_shrimp::fries::game_die::gem::ghost::gift::gift_heart::golf::grapes::green_apple::green_book::guitar::gun::hamburger::hammer::handbag::headphones::hearts::high_brightness::high_heel::hocho::honey_pot::horse_racing::hourglass::hourglass_flowing_sand::ice_cream::icecream::inbox_tray::incoming_envelope::iphone::jack_o_lantern::jeans::key::kimono::lantern::ledger::lemon::lipstick::lock::lock_with_ink_pen::lollipop::loop::loud_sound::loudspeaker::low_brightness::mag::mag_right::mahjong::mailbox::mailbox_closed::mailbox_with_mail::mailbox_with_no_mail::mans_shoe::meat_on_bone::mega::melon::memo::microphone::microscope::minidisc::money_with_wings::moneybag::mortar_board::mountain_bicyclist::movie_camera::musical_keyboard::musical_score::mute::name_badge::necktie::newspaper::no_bell::notebook::notebook_with_decorative_cover::nut_and_bolt::oden::open_book::open_file_folder::orange_book::outbox_tray::package::page_facing_up::page_with_curl::pager::paperclip::peach::pear::pencil::pencil2::phone::pill::pineapple::pizza::postal_horn::postbox::pouch::poultry_leg::pound::purse::pushpin::radio::ramen::ribbon::rice::rice_ball::rice_cracker::rice_scene::ring::rugby_football::running_shirt_with_sash::sake::sandal::santa::satellite::saxophone::school_satchel::scissors::scroll::seat::shaved_ice::shirt::shoe::shower::ski::smoking::snowboarder::soccer::sound::space_invader::spades::spaghetti::sparkle::sparkler::speaker::stew::straight_ruler::strawberry::surfer::sushi::sweet_potato::swimmer::syringe::tada::tanabata_tree::tangerine::tea::telephone::telephone_receiver::telescope::tennis::toilet::tomato::tophat::triangular_ruler::trophy::tropical_drink::trumpet::tshirt::tv::unlock::vhs::video_camera::video_game::violin::watch::watermelon::wind_chime::wine_glass::womans_clothes::womans_hat::wrench::yen:

### Places

:aerial_tramway::airplane::ambulance::anchor::articulated_lorry::atm::bank::barber::beginner::bike::blue_car::boat::bridge_at_night::bullettrain_front::bullettrain_side::bus::busstop::car::carousel_horse::checkered_flag::church::circus_tent::city_sunrise::city_sunset::cn::construction::convenience_store::crossed_flags::de::department_store::es::european_castle::european_post_office::factory::ferris_wheel::fire_engine::fountain::fr::fuelpump::gb::helicopter::hospital::hotel::hotsprings::house::house_with_garden::it::izakaya_lantern::japan::japanese_castle::jp::kr::light_rail::love_hotel::minibus::monorail::mount_fuji::mountain_cableway::mountain_railway::moyai::office::oncoming_automobile::oncoming_bus::oncoming_police_car::oncoming_taxi::performing_arts::police_car::post_office::railway_car::rainbow::red_car::rocket::roller_coaster::rotating_light::round_pushpin::rowboat::ru::sailboat::school::ship::slot_machine::speedboat::stars::station::statue_of_liberty::steam_locomotive::sunrise::sunrise_over_mountains::suspension_railway::taxi::tent::ticket::tokyo_tower::tractor::traffic_light::train::train2::tram::triangular_flag_on_post::trolleybus::truck::uk::us::vertical_traffic_light::warning::wedding:

### Symbols

:100::1234::a::ab::abc::abcd::accept::aquarius::aries::arrow_backward::arrow_double_down::arrow_double_up::arrow_down::arrow_down_small::arrow_forward::arrow_heading_down::arrow_heading_up::arrow_left::arrow_lower_left::arrow_lower_right::arrow_right::arrow_right_hook::arrow_up::arrow_up_down::arrow_up_small::arrow_upper_left::arrow_upper_right::arrows_clockwise::arrows_counterclockwise::b::baby_symbol::back::baggage_claim::ballot_box_with_check::bangbang::black_circle::black_large_square::black_medium_small_square::black_medium_square::black_small_square::black_square_button::cancer::capital_abcd::capricorn::chart::children_crossing::cinema::cl::clock1::clock10::clock1030::clock11::clock1130::clock12::clock1230::clock130::clock2::clock230::clock3::clock330::clock4::clock430::clock5::clock530::clock6::clock630::clock7::clock730::clock8::clock830::clock9::clock930::congratulations::cool::copyright::curly_loop::currency_exchange::customs::diamond_shape_with_a_dot_inside::do_not_litter::eight::eight_pointed_black_star::eight_spoked_asterisk::end::fast_forward::five::four::free::gemini::hash::heart_decoration::heavy_check_mark::heavy_division_sign::heavy_dollar_sign::heavy_exclamation_mark::heavy_minus_sign::heavy_multiplication_x::heavy_plus_sign::id::ideograph_advantage::information_source::interrobang::keycap_ten::koko::large_blue_circle::large_blue_diamond::large_orange_diamond::left_luggage::left_right_arrow::leftwards_arrow_with_hook::leo::libra::link::m::mens::metro::mobile_phone_off::negative_squared_cross_mark::new::ng::nine::no_bicycles::no_entry::no_entry_sign::no_mobile_phones::no_pedestrians::no_smoking::non-potable_water::o::o2::ok::on::one::ophiuchus::parking::part_alternation_mark::passport_control::pisces::potable_water::put_litter_in_its_place::radio_button::recycle::red_circle::registered::repeat::repeat_one::restroom::rewind::sa::sagittarius::scorpius::secret::seven::shipit::signal_strength::six::six_pointed_star::small_blue_diamond::small_orange_diamond::small_red_triangle::small_red_triangle_down::soon::sos::symbols::taurus::three::tm::top::trident::twisted_rightwards_arrows::two::u5272::u5408::u55b6::u6307::u6708::u6709::u6e80::u7121::u7533::u7981::u7a7a::underage::up::vibration_mode::virgo::vs::wavy_dash::wc::wheelchair::white_check_mark::white_circle::white_flower::white_large_square::white_medium_small_square::white_medium_square::white_small_square::white_square_button::womens::x::zero:

## Insert

```
^^insert^^

^^*insert italic*^^  *^^insert italic 2^^*

^^_insert italic_^^  _^^insert italic 2^^_

^^**insert bold**^^  **^^insert bold 2^^**

^^__insert bold__^^  __^^insert bold 2^^__

^^***insert italic bold***^^  ***^^insert italic bold 2^^***

^^___insert italic bold___^^  ___^^insert italic bold 2^^___

**^^*insert italic bold*^^**  *^^**insert italic bold 2**^^*

__^^_insert italic bold_^^__  _^^__insert italic bold 2__^^_

**^^_insert italic bold_^^**  _^^**insert italic bold 2**^^_

__^^*insert italic bold*^^__  *^^__insert italic bold 2__^^*
```

^^insert^^

^^*insert italic*^^  *^^insert italic 2^^*

^^_insert italic_^^  _^^insert italic 2^^_

^^**insert bold**^^  **^^insert bold 2^^**

^^__insert bold__^^  __^^insert bold 2^^__

^^***insert italic bold***^^  ***^^insert italic bold 2^^***

^^___insert italic bold___^^  ___^^insert italic bold 2^^___

**^^*insert italic bold*^^**  *^^**insert italic bold 2**^^*

__^^_insert italic bold_^^__  _^^__insert italic bold 2__^^_

**^^_insert italic bold_^^**  _^^**insert italic bold 2**^^_

__^^*insert italic bold*^^__  *^^__insert italic bold 2__^^*

## Math

```
$$ evidence\_{i}=\sum\_{j}W\_{ij}x\_{j}+b\_{i} $$

$p(x|y) = \frac{p(y|x)p(x)}{p(y)}$, \(p(x|y) = \frac{p(y|x)p(x)}{p(y)}\).

$$
E(\mathbf{v}, \mathbf{h}) = -\sum_{i,j}w_{ij}v_i h_j - \sum_i b_i v_i - \sum_j c_j h_j
$$

\\[3 < 4\\]

\begin{align}
    p(v_i=1|\mathbf{h}) & = \sigma\left(\sum_j w_{ij}h_j + b_i\right) \\
    p(h_j=1|\mathbf{v}) & = \sigma\left(\sum_i w_{ij}v_i + c_j\right)
\end{align}
```

$$ evidence\_{i}=\sum\_{j}W\_{ij}x\_{j}+b\_{i} $$

$p(x|y) = \frac{p(y|x)p(x)}{p(y)}$, \(p(x|y) = \frac{p(y|x)p(x)}{p(y)}\).

$$ E(\mathbf{v}, \mathbf{h}) = -\sum_{i,j}w_{ij}v_i h_j - \sum_i b_i v_i - \sum_j c_j h_j $$

\\[3 < 4\\]

\begin{align}
    p(v_i=1|\mathbf{h}) & = \sigma\left(\sum_j w_{ij}h_j + b_i\right) \\
    p(h_j=1|\mathbf{v}) & = \sigma\left(\sum_i w_{ij}v_i + c_j\right)
\end{align}

## 网易云音乐

```
{{%/* music "28196554" */%}}
```

{{% music "28196554" %}}

## YouTube

```
{{%/* youtube "wC5pJm8RAu4" */%}}
```

{{% youtube "wC5pJm8RAu4" %}}
