<?php
/**
 * Copyright 2016 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

namespace Google\Cloud\Tests\Snippets\Spanner;

use Google\Cloud\Dev\Snippet\SnippetTestCase;
use Google\Cloud\Spanner\Date;
use Google\Cloud\Spanner\ValueMapper;

/**
 * @group spanner
 */
class DateTest extends SnippetTestCase
{
    private $dt;
    private $date;

    public function setUp()
    {
        $this->dt = new \DateTimeImmutable;
        $this->date = new Date($this->dt);
    }

    public function testClass()
    {
        if (!extension_loaded('grpc')) {
            $this->markTestSkipped('Must have the grpc extension installed to run this test.');
        }

        $snippet = $this->snippetFromClass(Date::class);
        $res = $snippet->invoke('date');

        $this->assertInstanceOf(Date::class, $res->returnVal());
    }

    public function testClassString()
    {
        $snippet = $this->snippetFromClass(Date::class, 1);
        $snippet->addLocal('date', $this->date);
        $res = $snippet->invoke();

        $this->assertEquals($this->date->formatAsString(), $res->output());
    }

    public function testCreateFromValues()
    {
        $snippet = $this->snippetFromMethod(Date::class, 'createFromValues');
        $snippet->addUse(Date::class);

        $res = $snippet->invoke('date');
        $this->assertEquals('1995-02-04', $res->returnVal()->formatAsString());
    }

    public function testGet()
    {
        $snippet = $this->snippetFromMethod(Date::class, 'get');
        $snippet->addLocal('date', $this->date);
        $res = $snippet->invoke('dateTime');
        $this->assertEquals($this->dt, $res->returnVal());
    }

    public function testType()
    {
        $snippet = $this->snippetFromMethod(Date::class, 'type');
        $snippet->addLocal('date', $this->date);
        $res = $snippet->invoke();
        $this->assertEquals(ValueMapper::TYPE_DATE, $res->output());
    }

    public function testFormatAsString()
    {
        $snippet = $this->snippetFromMethod(Date::class, 'formatAsString');
        $snippet->addLocal('date', $this->date);
        $res = $snippet->invoke();
        $this->assertEquals($this->date->formatAsString(), $res->output());
    }
}
