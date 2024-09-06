import 'package:flutter/material.dart';
import 'package:http/http.dart' as http;
import 'dart:convert';

void main() {
  runApp(MyApp());
}

class MyApp extends StatefulWidget {
  const MyApp({super.key});

  @override
  _MyAppState createState() => _MyAppState();
}

class _MyAppState extends State<MyApp> {
  String members = 'Loading...';
  String dailyActivity = 'Loading...';
  String dailyAffirmation = 'Loading...';

  // Function to fetch members from Flask
  Future<void> fetchMembers() async {
    final response = await http.get(Uri.parse('http://127.0.0.1:5000/members'));

    if (response.statusCode == 200) {
      final data = json.decode(response.body);
      setState(() {
        members = data['members'].join(', ');
      });
    } else {
      setState(() {
        members = 'Failed to load members';
      });
    }
  }

  // Function to fetch daily activity from Flask
  Future<void> fetchDailyActivity() async {
    final response = await http.get(Uri.parse('http://127.0.0.1:5000/daily-activity'));

    if (response.statusCode == 200) {
      final data = json.decode(response.body);
      setState(() {
        dailyActivity = data['dailyActivity'];
      });
    } else {
      setState(() {
        dailyActivity = 'Failed to load daily activity';
      });
    }
  }

  // Function to fetch daily affirmation from Flask
  Future<void> fetchDailyAffirmation() async {
    final response = await http.get(Uri.parse('http://127.0.0.1:5000/daily-affirmation'));

    if (response.statusCode == 200) {
      final data = json.decode(response.body);
      setState(() {
        dailyAffirmation = data['dailyAffirmation'];
      });
    } else {
      setState(() {
        dailyAffirmation = 'Failed to load daily affirmation';
      });
    }
  }

  @override
  void initState() {
    super.initState();
    fetchMembers();
    fetchDailyActivity();
    fetchDailyAffirmation();
  }

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      home: Scaffold(
        appBar: AppBar(
          title: const Text('Flutter & Flask Integration'),
        ),
        body: Padding(
          padding: const EdgeInsets.all(16.0),
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              Text('Members: $members', style: const TextStyle(fontSize: 16)),
              const SizedBox(height: 16),
              Text('Daily Activity: $dailyActivity', style: const TextStyle(fontSize: 16)),
              const SizedBox(height: 16),
              Text('Daily Affirmation: $dailyAffirmation', style: const TextStyle(fontSize: 16)),
            ],
          ),
        ),
      ),
    );
  }
}
