/*
    NS - NpSearch's JavaScript module

    Define a global NS (acronym for NpSearch) object containing all
    NS associated methods:
*/

// define global NS object
var NS;
if (!NS) {
  NS = {};
}

NS.fasta = '>gi|328696568|ref|XP_003240064.1| PREDICTED: uncharacterized protein LOC100575472 [Acyrthosiphon pisum]\n' +
  'MTRLHSVIHKLPNWKQLRVVLKLMSIMGDPVASFPEIIELNKLRRWYEVRINENRHMTLKMKQNLMVQSINAWSAPRIKLTSVNVPQNPMPGEGKIGAMKITWNRVNEMKRKIKKTKSEYIDKLKRVAINNARTMYQTMYNDYYNSHLSRNFKQSYYDYFPAKEDDCLFEYVADRKNNK\n' +
  '>gi|641647015|ref|XP_008180670.1| PREDICTED: 33 kDa inner dynein arm light chain, axonemal-like [Acyrthosiphon pisum]\n' +
  'MSTVEKVLSSELNLVQFDNPKMIATKSMPTLSTQTKQEKYCMESNVSAMESGDYVDEAKQHNCTYVLNSILPRKEWEMDGKIFSQQISIQPATKRDVKNLVEKFDTYLKEYNTKVVGICPIKQEIYSQCFNEVIRQVTLNCTERGYMLIRIRDELQMTIDGYKEVYESALAHGIRKSLQAIL\n' +
  '>gi|328711854|ref|XP_003244660.1| PREDICTED: uncharacterized protein LOC100571180 [Acyrthosiphon pisum]\n' +
  'MVKIGLPWLLLVLMKLTNREIKSDEIISIQEVYDICQAEPNTDICDLLEKSSSLVDLNKLDSPEKRRQKTVFSSWGGKRQSTYPYGGKRPAFSSWGGKRASDKHGRPKQTFSSWGGKRSDYDGYDNGEMDEHQMDKRELNGIKQDKNNYRNKMTKGIHALFTIFSDWSRDPEEKKGIRYAGIKSMRRSSDFFPWGGKRFTGDAK\n' +
  '>gi|253735804|ref|NP_001156684.1| ecdysis triggering hormone preproprotein [Acyrthosiphon pisum]\n' +
  'MSGYLAIIVLVCLQILRVMSINEFPEKKVQNIWLADLDDKQIASRIERSDQFETASDVLMKDASVYPKITRRGFAGEEFFLKASKSVPRIGRRNNDIQETPKRSLSKDQVNMVEYWPYLQPNDINDLTRKHDFDLPYNCQQLDAKTIFLVDMYNFVCNDQFYCCAPAKRAIANSPNSNSL\n' +
  '>gi|328710353|ref|XP_003244236.1| PREDICTED: uncharacterized protein LOC100573178 [Acyrthosiphon pisum]\n' +
  'MTMSVTITILCILGSTFLLIMPDNTTASDKFFQTGGRFGKRHDEHIPDIRYAAMVKTRSVDNVPPRIERGFYISRYGKRSTNSITDPYYFTLCLPSYGIYCDFTGLPNLLRCKRIQPGACSNLNYVNEKTQMKPDNDIII\n' +
  '>gi|328721150|ref|XP_003247225.1| PREDICTED: uncharacterized protein LOC100571498 [Acyrthosiphon pisum]\n' +
  'MSFRKFFLRDNGKHRNMDSGGKNDESTTNKDEAKQGQHDAHKHHDIMGEIVLGQELPDNVKDNHNGVDLVDNQVKEVNPHSESLDTYQIDEYDDYMDEDINIITATLDI\n' +
  '>gi|193573549|ref|XP_001947462.1| PREDICTED: orcokinin peptides type A-like isoform X2 [Acyrthosiphon pisum]\n' +
  'MASSSTMIVAVASALCVHTILAYPTSIERVSGDNNYLPLRNSPSRDLDRFIEGENLLRDLEILRDRAEYFARQSRHINSLDGVGFGQSKRFDTLSGVSFGGQKRNFDEIDRSGFDRFVKKNFDEIDRSGFDRFVKKNFDEIDRSAFNSFVKRPNKVPAANLE\n' +
  '>gi|328711811|ref|XP_003244646.1| PREDICTED: uncharacterized protein LOC100163518 isoform X2 [Acyrthosiphon pisum]\n' +
  'MAGKFSALFLVGFVAAVVVAPYMMAEARYLPTRGNDDRLTRLKELLTDLLDSGAQPNLEMERPYVDVNGDFSRLRPREYNIPEKSIMELFNPTVPHHQRPRS\n' +
  '>gi|641677312|ref|XP_008187726.1| PREDICTED: uncharacterized protein LOC100569988 isoform X1 [Acyrthosiphon pisum]\n' +
  'MNPSILTLVWMSILVSLVQTVFADDVIMQKRYFDNDNPVAEPIRRKKPFCNAFTGCGRKRSDESMATLVDLRSEPAVEEISRQIMSEAKLWEAIQEARLELIRQQRQNKAERMDVKPYPIGLRRKRRSLATSDKC\n' +
  '>gi|328717573|ref|XP_003246245.1| PREDICTED: uncharacterized protein LOC100568735 [Acyrthosiphon pisum]\n' +
  'MPHKINVGLVALAALAAAVLADPSVDRRASMGFMGMRGKKDRDQGGGGSGGDETSAAVDLDKRTMVFRRPMFDGGSRPAVFGGGSAEGFKRASMGFMGMRGKKDYYSNNKGSAAGFFGMRGKKVPSADAFYGVRGKKWPDHEDAVDADVQLSPIYILYRIIDELKSELSDRERNLVAAKFDEEREMR\n' +
  '>gi|328721130|ref|XP_003247218.1| PREDICTED: alpha-tubulin N-acetyltransferase 1-like [Acyrthosiphon pisum]\n' +
  'MAMQFKFDSNSHVGQVLKINNTLTAEGYENNHELRNNLRLIIDEIGKSSAIAQHLEFPITSAQKLLNSDHVIYMMTEQNTPANFAVIGFLKMGWKKLFIYNKQDTCSETLVYCMLDFYIYESKQRQGYGKRLIEYMLQDMKLHARHLVMDKPTTNLLQFMLKNFQLSKLVNQGNNFAIYEDFFDEFNENHDYTGNRTSGYNRPPTFGRHGAHKHHDSMGEILQNTGPSSSVMHNHNNDFVHNQFHEVKPHTEEALGSLQINKYGDYVERDLKYHHSST\n' +
  '>gi|752421898|ref|XP_011230170.1| PREDICTED: glucagon [Ailuropoda melanoleuca]\n' +
  'MKSIYFVAGLFVMLVQGSWQRSLQDTEEKSRSLPAPQTDPLNDPDQMNEDKRHSQGTFTSDYSKYLDSRRAQDFVQWLMSTKRNKNNIAKRHDEFERHAEGTFTSDVSSYLEGQAAKEFIAWLVKGRGRRDFPEEVAIVEELRRRHADGSFSDEMNTVLDDLATRDFINWLLQTKITER\n' +
  '>gi|641675367|ref|XP_003247220.2| PREDICTED: alpha-tubulin N-acetyltransferase 1-like [Acyrthosiphon pisum]\n' +
  'MEFNFNIGKVATDEVLKINNTLTVEGHEENDDLKNIMRLIIDEMGKASAVSQEFKVPITSANRLVNSDHVIYMMTEHKKPGHFAVVGFLKMGWKKLFLYDKQASRSEARVYCLLDFYIHESKQRKGYGIRLIQCMLQDIGLEAKHLAIDKPTDKLLQFMWKHFQLSKLVNQENNFVIFEEFFHNSSEKKNNRDNTGNRAVAYKSQPMFGRHGAHKHHDSMAEIIQGEGNAAFVKFKYNQDTDFVDNQFKEKNPNPESKGAFKTNMDGYSVKRDLKFHHNSLW\n' +
  '>gi|641669265|ref|XP_008184748.1| PREDICTED: eukaryotic translation initiation factor 2-alpha kinase isoform X2 [Acyrthosiphon pisum]\n' +
  'MNLIIIKYLLKVVFIVFGVQTVFVLCDKPVCPGNHEANKQFIFISTLDGKLTALNTANGGTEAWKLSTEPGALLSSTIGQPELSNNGLWVRMIPSLSGSLYTFDGENLDRLPFTVDSLLKSYFPYYDGLAMSGGKISRTYGVDMSTGQLLYKCDMDQCNNFPSNSFTSIDGNILILQTQTQTVRASDTLTGIERWNFSVGLHDIKVIMDLNNNCHTTNPSIKLDFKINIPNGVVTAVAFDRPQEVVWTHKSESPIVNVWKFEHGKVESIDLFKPDHNLNSIDPVIYLGMHKKQLYIQENDKVFAVNPISYLKSLLLEGNEINKSRIPWKPIPVSSQLISKSPSALQTTDDVSKTTAIAVLYASEYINGNGFYLNGPQKTKRLIDGKKYKSFNSENENETENNHESIIQYEEGLEMPVEIIIVSLWYWWKEVLFISVITAILINIFIPSRLARIITFIHNRSKKNEGVEKIVEPIENNIDCCKDSGIEFSSDNIVQKQLHPIVEFKSRYLQDFEPIHCLGKGGFGIVFEARNKIDDCHYAIKRIPLPSKEESRNRVLREVKALAKLDHQHIVRYFNTWLEEPPSGWQEKHDDDWLQKSGDMDMNSNLTMSEKQVTNVCQNKHHVRAKSLSTWITLPESSEELSDILNNPHALRSYNDKSDSSFIVFESQISDTNTKDCILDISSDNLTKASKRRRYKSECDTTSNAHSERKATRHYLYIQMQLCHKNSLREWLKDNTKNRDMKYILNIFSQIIQAVEYVHLQGLIHRDLKLQK\n' +
  '>gi|193605856|ref|XP_001945771.1| PREDICTED: replication factor C subunit 2 [Acyrthosiphon pisum]\n' +
  'MEVDNPEEGASTSAVIDPMEGCSTSTNNVLTTVPPQTKTVKSDLNTPWIEKYRPKSFTDIVGNEETVLRLEKFSSCGNVPNIIIAGPPGVGKTTTILALARILLGGAFKEAVLELNASSDRGIDTVRNKIKMFAQQKVTLPPGRHKIIILDEADSMTDGAQQALRRTMELWSNTTRFALACNNSDKIIEAIQSRCAMLRYGKLSDQEVMTQMLKVCKSEEVSFSADGLEAVVFTAQGDMRQALNNLQSTWNGFRHVDSTNVFKVCDEPHPLLVKEMLLECADQNISKAYKIMAHLWKLGYAPEDIITNIFRVAKHLEIKESLKLKFVQEIGMAHIRIVEGMNSLLQLSGLLAKLCTVSAKTDG\n' +
  '>gi|193606041|ref|XP_001946815.1| PREDICTED: uncharacterized protein LOC100166012 [Acyrthosiphon pisum]\n' +
  'MQFNNYHDEAQKTDRDAPPPVEGRMDIGETSECKPRFGRHDAHKRHDTMGEIVQSGTDTMKFKYNHDNDFVDSRFKELIPHPEVVGELQTDKYGNSVKRDLKFHHSTLW\n' +
  '>gi|641675365|ref|XP_008187013.1| PREDICTED: uncharacterized protein LOC100166012 [Acyrthosiphon pisum]\n' +
  'MQFNNYHDEAQKTDRDAPPPVEGRMDIGETSECKPRFGRHDAHKRHDTMGEIVQSGTDTMKFKYNHDNDFVDSRFKELIPHPEVVGELQTDKYGNSVKRDLKFHHSTLW\n' +
  '>gi|193606039|ref|XP_001946532.1| PREDICTED: alpha-tubulin N-acetyltransferase 1-like [Acyrthosiphon pisum]\n' +
  'MEFKFDIKNVATEEVMKIDNTLTALGHEQNEDLKSIMKLIIDEMGKASAIAQELKMPITSGDKLANSDHILYMMTEHDKPEHFSVVGILKMGWKKLYLYNKEGLRSEAMVYCLLDFYIHESKQRKGYGKRLIECMLQDINLEAKHLAIDKPTKKLLQFMWKHYQLSKLVNQGNNFVIFEEFFDDALDEKNHDNSGHRAVSYMRQPMFGRHGAHKHHDTMGEIVQGEGDAAFVKFKYNQDTDFVDHQFKETNPHPENSNAFKTDKDGNSVKRDLKFHHNSLW\n' +
  '>gi|641675371|ref|XP_008187015.1| PREDICTED: poly(A) RNA polymerase, mitochondrial-like [Acyrthosiphon pisum]\n' +
  'MDLFKDWGLLCARILSDLELMNLSLTSTEIQSRVQQLCDSISSFQINTDSKKIHIFGSRIYGLATNTTDIDIYLEIDDTFDGIIANNEEIQVEYVQQFTKYCLLKPEVFQNVKSICNCRVPIVTFYHVPSKFICDVSFKSGLGTYNTKLIKFYLSMDTTVKWLVCVIVKNWALQNGLKDRNLFTSYALIWLVLFYLMTEKVVPSLIKLRQNATKADHKVIEGWDCTFGKCSVYISEDKRPKLLMGFFQYYANKRALKDNVLSTCTGQLIKKHAFYEKFSQLPGLSKIQRTKFKNFKAKVDSSFEKNYGLVLQDPFELSFNLTRNLHNQALTDFCDLCHQSSTLLINMKGYSMFSNT\n' +
  '>gi|641676236|ref|XP_008187335.1| PREDICTED: allatostatins [Acyrthosiphon pisum]\n' +
  'MHHSCCMWILVIATAVWTDAITGHEDKVGIKSQQAQQQQQSDIMQTMVDGGGHQSIQMTSPAESYFNDPLGPLGYLAKRAHKQYGFGLGKRLYRQYEFGLGKRSASKQYGFGLGKRAALKQYEFGLGKRASPTFYSFGLGRRASPQYSFGLGKRVSHPSFLNVDDRESDYTYNDLSEEKKRTADDMGHGQRFAFGLGKRGAGAEWDDGDGDGDDAAPIWHPAVRRARLQYGFGLGKRADRDYDATTGTEYTDTLQLADDAADINN\n' +
  '>gi|641675388|ref|XP_008187022.1| PREDICTED: uncharacterized protein LOC103310453 [Acyrthosiphon pisum]\n' +
  'MAEIMNIDVSIKLPPLLLQSFSINNYEAKCMKCNISCAPEEEDILFHLSVCNGTLIEENIQTLFKFNCLECNYLTHSIDQWKCHLFKLDHISKSFDFDILRLSYDCKSCNTHFFGFRDSILKHHCKPQFIPSISYLMSSVYKNYNVQDEQTMFHYCTDCSFFTDNLTELHKKEHSEVADPSVCHSCLITFYGSSNEEFLNHKVSFEHILLWCLNGARSVPKMSTTAFQNLPYYITKYFVISPLLKKFCCIVCNTKNILTYECIYDHFYNCISSKEISDVKGCNPLLSINCNLCDYSCFSVDDMYKCWVDHVISFDHLSKTVILSLKI\n' +
  '>gi|641675373|ref|XP_008187016.1| PREDICTED: poly(A) RNA polymerase, mitochondrial-like [Acyrthosiphon pisum]\n' +
  'MNLSRTSIETRSRVQQLCDSICSFQINTDSKKIHTFGSRVYGLATNTTNIDIYLEIDDTFDGIIANNEKIQVEYVQQFTKYCLSKPEVFQNVKSICNCRMPIVTFYHVPSKFICDVSFKSGLVTYNTELIKFYLLMNPTVKWLVCVIVKNWAPQNGLIDRQLFTSYALIWLVLFYLMTEKVVPSLIKLRHISTEDDHKVIEGWDCTFGKCFIYISEEKRPKLLLGFFQYYANKRALKDNVLSTCTGQLIKKHEFFERFSQLPGLSQIQRTKFKNFKAEVDSSFEKNYGLVLQDPFELSFNLTRNLHDKALNDFCDLCMQSSRLLLNMKD\n' +
  '>gi|641659926|ref|XP_008181304.1| PREDICTED: uncharacterized protein LOC100570556 isoform X2 [Acyrthosiphon pisum]\n' +
  'MHKFFVQIYIFVLIIWAVEKSDCKQGACLNYGHSCWGAHGKRNVPNDLDSLIRYRMAVFKKSGHRDSFINPNADQSQEDIPNYYNIFKHYSKINSVKTNNDDTVDTWSLEPSNNLPSGGSYYEDQVLDPRIEYKIMKI\n' +
  '>gi|301771746|ref|XP_002921293.1| PREDICTED: thyrotropin releasing hormone [Ailuropoda melanoleuca]\n' +
  'MPGPWLQLAMALTLTVAGIPGGRAQPEVAQQEAAMAPERAGLDDLLRQAQRLLFLREDLQRLRGNQGDLESEAQILQPDWLSKRQHPGKREGEAEEGVEEEEEEGGAVGPHKRQHPGRQEDVAAWSDVTLQKRQHPGRRAPLLGYAFTKRQHPGRRLVDSKAQRSWEAEEEDGEEEGGEPMPEKRQHPGKRALGSPCGPGAACGQASLLLGLLDDLSRGQGAEEKRQHPGRRAAWAREPLEE\n' +
  '>gi|193629757|ref|XP_001950852.1| PREDICTED: splicing factor U2AF 50 kDa subunit-like [Acyrthosiphon pisum]\n' +
  'MGEDKERERDRDRGEREKERGERRRRSRSRDRERHRRHRSRSRDGRKRSRSKSPKNKSRRRKPSLYWDVPPPGFEHIAPLQYKAMQAAGQIPANTMPDTPQTAVPVVGSTITRQARRLYVGNIPFGVTEDEMMEFFNQQMHLSGLAQAAGNPVLACQINLDKNFAFLEFRSIDETTQAMAFDGINFKGQSLKIRRPHDYQPTPGMTESNPVTNYNSGMTLDMMKYDSSSFGLGTVPDSPHKIFIGGLPAYLNDEQVKELLTSFGQLKAFNLVKDAATGLSKGYAFCEYADVVMTDQAIAGLNGMQLGEKKLIVQRASIGAKNPGLGQAPVTIQVPGLTVVGTAGPPTEVLCLLNMVTPDELKDEEEYEDILEDIREECNKYGVVRSLEIPRPIEGIDVPGCGKVFIEFNAIPDCQKAQQALAGRKFNNRVVVTSFMEPDKYHRREF\n';

// NS module
(function () {
  // Creates a custom Validation for Jquery Validation plugin...
  // It ensures that sequences are either protein or DNA data...
  // If there are multiple sequences, ensures that they are of the same type
  // It utilises the NS.checkType function (further below)...
  NS.addSeqValidation = function() {
    $.validator.addMethod('checkInputType', function (value, element) {
      var types = [],
          type = '';
      if (value.charAt(0) === '>') {
        var seqs_array = value.split('>');
        for (var i = 1; i < seqs_array.length; i++) {
          var lines = seqs_array[i].split('\n');
          if (lines.length !== 0) {
            var clean_lines = jQuery.grep(lines, function (n) {
              return (n);
            });
            if (clean_lines.length !== 0) {
              clean_lines.shift();
              var seq = clean_lines.join('');
              type = NS.checkType(seq, 0.9);
              types.push(type);
              if ((type !== 'protein') && (type !== 'dna') && (type !== 'rna')) {
                return false;
              }
            }
          }
        }
        var firstType = types[0];
        for (var j = 0; j < types.length; j++) {
          if (types[j] !== firstType) {
            return false;
          }
        }
        return true;
      } else {
        type = NS.checkType(value, 0.9);
        if ((type !== 'protein') && (type !== 'dna') && (type !== 'rna')) {
          return false;
        } else {
          return true;
        }
      }
    }, '* The Input must be either DNA or protein sequence(s). Please ensure that your sequences do not contains any non-letter character(s). If there are multiple sequences, ensure that they are all of one type. ');
  };

  NS.setUpValidatorDefaults = function () {
    NS.addSeqValidation();
    $.validator.setDefaults({
      errorClass: 'invalid',
      errorPlacement: function (error, element) {
        error.insertAfter($(element).siblings('label'));
      }
    });
  };

  NS.initValidation = function () {
    NS.setUpValidatorDefaults();
    $('#input').validate({
      rules: {
        seq: {
          required: function (element) {
            return $('textarea[name=seq]').is(':visible');
          },
        },
        input_file: {
          required: function (element) {
            return $('textarea[name=input_file]').is(':visible');
          }
        }
      },

      submitHandler: function (form) {
        $('#spinnermodel').modal('open');

        // Check if some files are still running
        if (NS.fineUploader.getInProgress() !== 0) {
          $('.validation_text').text('Please wait until all the files have completely uploaded.');
          return false;
        }
        $('.validation_text').text('');

        var formData = $("#input").serializeArray();
        formData.push({
          name: "files",
          value: JSON.stringify(NS.fineUploader.getUploads())
        });

        $.ajax({
          type: 'POST',
          url: $('#input').attr('action'),
          data: formData,
          success: function(response) {
            NS.ajaxSuccessFunction(response);
          },
          error: function(e, status) {
            NS.ajaxErrorFunction(e, status);
          }
        })
      }
    });
  };

  // Sends the data within the form to the Server
  NS.ajaxSuccessFunction = function (response) {
    $('#results_box').show();
    $('#output').html(response);
    $('.alignment').css('max-width', $('.card').width() - 120 + 'px');
    $(window).on('resize', function () {
      $('.alignment').css('max-width', $('.card').width() - 120 + 'px');
    });

    $('.np_collapsible').collapsible();
    $('.np_inner_collapsible').collapsible();

    $('html, body').animate({
      scrollTop: $('#results').offset().top
    });

    $('#spinnermodel').modal('close'); // remove progress notification
  };


  NS.ajaxErrorFunction = function (e, status) {
    $('#results_box').show();
    var errorMessage;
    if (e.status == 500 || e.status == 400) {
      errorMessage = e.responseText;
    } else {
      // errorMessage = e.responseText;=
      errorMessage = 'There seems to be an unidentified Error.';
    }
    $('#output').html(errorMessage);
    $('#spinnermodel').modal('close'); // remove progress notification
  };

  NS.initFineUploader = function () {
    NS.fineUploader = new qq.FineUploader({
      element: $('#fine-uploader-validation')[0],
      template: 'qq-template-validation',
      request: {
        endpoint: '/api/upload'
      },
      thumbnails: {
        placeholders: {
          waitingPath: '/assets/img/fine-uploader/placeholders/file.png',
          notAvailablePath: '/assets/img/fine-uploader/placeholders/file.png'
        },
      },
      validation: {
        allowedExtensions: ['fa','fas','fna','faa','fasta'],
        itemLimit: 5,
        sizeLimit: 78650000 // 75MB
      },
      callbacks: {
        onSubmitted: function () {
          var elem = document.getElementById("input_type");
          var input_tabs = M.Tabs.getInstance(elem);
          if (input_tabs.index !== 1){
            input_tabs.select('upload');
          }
        }
      },
      chunking: {
        enabled: true,
        concurrent: {
          enabled: true
        },
        success: {
          endpoint: "/api/upload_done"
        }
      }
    });
    NS.fineUploader.addExtraDropzone($(".drop_zone_container")[0]);
  };

  NS.initShowExampleButton = function() {
    $('#np_example').on('click', NS.examplarSequences);
    $('#input_type').on('click', function () {
    });
  };

  NS.initMaterialize = function () {
    $('.sidenav').sidenav();
    var elems = document.querySelectorAll('.modal');
    M.Modal.init(document.getElementById("explanation"));
    M.Modal.init(document.getElementById("spinnermodel"), {
      dismissible: false
    });

    var input_tabs = M.Tabs.init(document.getElementById("input_type"), {
      onShow: function() {
        if ($(this)[0].index == 0) {
          $('.show_examples_text').show();
        } else {
          $('.show_examples_text').hide();
        }
      }
    });
    input_tabs.select('paste');
  };

  NS.initViewMoreInfoToggle = function() {
    $('.more_info_btn').click(function () {
      var body = $(this).siblings('.more_info_body');
      if ($(body).is(':visible')) {
        $(this).text('View More Information');
      } else {
        $(this).text('View Less Information');
      }
    });
  };

  NS.initSpFilter = function() {
    $('.sp_filter').change(function () {
      if ($(this).prop('checked')) {
        $('.card').has('.no_sp_present').hide();
      } else {
        $('.card').has('.no_sp_present').show();
      }
    });
  };

  NS.initAdvParamsToggle = function() {
    var btn = document.getElementById('adv_params_btn');
  if (btn.innerHTML === '&nbsp;&nbsp;Show Advanced Parameters') {
    btn.innerHTML = '&nbsp;&nbsp;Hide Advanced Parameters';
  } else {
    btn.innerHTML = '&nbsp;&nbsp;Show Advanced Parameters';
  }
  };

  // Changes the input to an examplar dna or protein sequence...
  NS.examplarSequences = function () {
    $('#seq').focus();
    $('#seq_label').addClass('active');
    $('#seq').val(NS.fasta);
    $('#seq').valid();
    M.textareaAutoResize($('#seq'));
  };

  // FROM BIONODE-Seq - See https://github.com/bionode/bionode-seq
  // Checks whether a sequence is a protein or dna sequence...
  NS.checkType = function (sequence, threshold, length, index) {
    'use strict';
    if (threshold === undefined) {
      threshold = 0.9;
    }
    if (length === undefined) {
      length = 10000;
    }
    if (index === undefined) {
      index = 1;
    }
    var seq = sequence.slice(index - 1, length);

    var dnaSeq = seq.replace(/N/gi, '');
    var dnaTotal = dnaSeq.length;
    var acgMatch = ((dnaSeq.match(/[ACG]/gi) || []).length) / dnaTotal;
    var tMatch = ((dnaSeq.match(/[T]/gi) || []).length) / dnaTotal;
    var uMatch = ((dnaSeq.match(/[U]/gi) || []).length) / dnaTotal;

    var proteinSeq = seq.replace(/X/gi, '');
    var proteinTotal = proteinSeq.length;
    var proteinMatch = ((seq.match(/[ARNDCQEGHILKMFPSTWYV\*]/gi) || []).length) / proteinTotal;

    if (((acgMatch + tMatch) >= threshold) || ((acgMatch + uMatch) >= threshold)) {
      if (tMatch >= uMatch) {
        return 'dna';
      } else if (uMatch >= tMatch) {
        return 'rna';
      } else {
        return 'dna';
      }
    } else if (proteinMatch >= threshold) {
      return 'protein';
    }
  };
}());