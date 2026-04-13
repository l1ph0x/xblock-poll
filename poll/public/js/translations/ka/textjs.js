(function(global){
    var PollXBlockI18N = {
      init: function() {

(function(globals) {

  var django = globals.django || (globals.django = {});

  django.pluralidx = function(n) {
    return 0;
  };

  /* gettext library */

  django.catalog = django.catalog || {};

  var newcatalog = {
    "Answer": "პასუხი",
    "Delete": "წაშლა",
    "Feedback": "უკუკავშირი",
    "Image URL": "სურათის URL",
    "Image alternative text": "სურათის ალტერნატიული ტექსტი",
    "Question": "კითხვა",
    "Results": "შედეგები",
    "Results gathered from {total} respondent.": [
      "{total} რესპონდენტისგან შეგროვებული შედეგები."
    ],
    "Submit": "გაგზავნა",
    "This must have an image URL or text, and can have both.  If you add an image, you must also provide an alternative text that describes the image in a way that would allow someone to answer the poll if the image did not load.": "ეს უნდა შეიცავდეს სურათის URL-ს ან ტექსტს და შეიძლება ორივეც ჰქონდეს. თუ დაამატებთ სურათს, ასევე უნდა მიუთითოთ ალტერნატიული ტექსტი, რომელიც აღწერს სურათს ისე, რომ მომხმარებელმა შეძლოს გამოკითხვაზე პასუხის გაცემა მაშინაც, თუ სურათი არ ჩაიტვირთა.",
    "You can make limited use of Markdown in answer texts, preferably only bold and italics.": "პასუხის ტექსტებში შეგიძლიათ შეზღუდულად გამოიყენოთ Markdown, სასურველია მხოლოდ გამუქება და კურსივი.",
    "move poll down": "გამოკითხვის ქვემოთ გადატანა",
    "move poll up": "გამოკითხვის ზემოთ გადატანა"
  };
  for (var key in newcatalog) {
    django.catalog[key] = newcatalog[key];
  }

  if (!django.jsi18n_initialized) {
    django.gettext = function(msgid) {
      var value = django.catalog[msgid];
      if (typeof(value) == 'undefined') {
        return msgid;
      } else {
        return (typeof(value) == 'string') ? value : value[0];
      }
    };

    django.ngettext = function(singular, plural, count) {
      var value = django.catalog[singular];
      if (typeof(value) == 'undefined') {
        return singular;
      } else {
        return value.constructor === Array ? value[django.pluralidx(count)] : value;
      }
    };

    django.gettext_noop = function(msgid) { return msgid; };

    django.pgettext = function(context, msgid) {
      var value = django.gettext(context + '\x04' + msgid);
      if (value.indexOf('\x04') != -1) {
        value = msgid;
      }
      return value;
    };

    django.npgettext = function(context, singular, plural, count) {
      var value = django.ngettext(context + '\x04' + singular, context + '\x04' + plural, count);
      if (value.indexOf('\x04') != -1) {
        value = django.ngettext(singular, plural, count);
      }
      return value;
    };

    django.interpolate = function(fmt, obj, named) {
      if (named) {
        return fmt.replace(/%\(\w+\)s/g, function(match){return String(obj[match.slice(2,-2)])});
      } else {
        return fmt.replace(/%s/g, function(match){return String(obj.shift())});
      }
    };

    /* formatting library */

    django.formats = {
      "DATETIME_FORMAT": "j F Y, H:i",
      "DATETIME_INPUT_FORMATS": [
        "%Y-%m-%d %H:%M:%S",
        "%Y-%m-%d %H:%M:%S.%f",
        "%Y-%m-%d %H:%M",
        "%Y-%m-%d",
        "%d.%m.%Y %H:%M:%S",
        "%d.%m.%Y %H:%M:%S.%f",
        "%d.%m.%Y %H:%M",
        "%d.%m.%Y",
        "%d.%m.%y %H:%M:%S",
        "%d.%m.%y %H:%M:%S.%f",
        "%d.%m.%y %H:%M",
        "%d.%m.%y"
      ],
      "DATE_FORMAT": "j F Y",
      "DATE_INPUT_FORMATS": [
        "%Y-%m-%d",
        "%d.%m.%Y",
        "%d.%m.%y"
      ],
      "DECIMAL_SEPARATOR": ".",
      "FIRST_DAY_OF_WEEK": 1,
      "MONTH_DAY_FORMAT": "j F",
      "NUMBER_GROUPING": 3,
      "SHORT_DATETIME_FORMAT": "d.m.Y H:i",
      "SHORT_DATE_FORMAT": "d.m.Y",
      "THOUSAND_SEPARATOR": ",",
      "TIME_FORMAT": "H:i",
      "TIME_INPUT_FORMATS": [
        "%H:%M:%S",
        "%H:%M:%S.%f",
        "%H:%M"
      ],
      "YEAR_MONTH_FORMAT": "F Y"
    };

    django.get_format = function(format_type) {
      var value = django.formats[format_type];
      if (typeof(value) == 'undefined') {
        return format_type;
      } else {
        return value;
      }
    };

    /* add to global namespace */
    globals.pluralidx = django.pluralidx;
    globals.gettext = django.gettext;
    globals.ngettext = django.ngettext;
    globals.gettext_noop = django.gettext_noop;
    globals.pgettext = django.pgettext;
    globals.npgettext = django.npgettext;
    globals.interpolate = django.interpolate;
    globals.get_format = django.get_format;

    django.jsi18n_initialized = true;
  }

}(this));

      }
    };
    PollXBlockI18N.init();
    global.PollXBlockI18N = PollXBlockI18N;
}(this));
